
import express from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import User from '../models/User.js';
import { sendVerificationEmail } from '../config/email.js';

const router = express.Router();

const OTP_EXPIRY_MINUTES = 10;

const createPublicUser = (user) => ({
  id: user._id.toString(),
  fullName: user.fullName,
  email: user.email,
  role: user.role,
  publicId: user.publicId,
  avatar: user.avatar,
  skills: user.skills || [],
  interests: user.interests || [],
  joinedChannels: user.joinedChannels || [],
  connectedMentors: user.connectedMentors || [],
  savedResources: user.savedResources || [],
  helpedCount: 0,
  questionsAsked: 0,
  discussionsParticipated: 0,
  createdAt: user.createdAt
});

const hashOtp = (otp) =>
  crypto.createHash('sha256').update(otp).digest('hex');

// SIGNUP: POST /api/auth/signup
router.post('/signup', async (req, res) => {
  let createdUser = null;

  try {
    const {
      fullName,
      email,
      password,
      role,
      skills,
      interests,
      avatar,
      publicId
    } = req.body || {};

    if (
      typeof fullName !== 'string' ||
      !fullName.trim() ||
      typeof email !== 'string' ||
      !email.trim() ||
      typeof password !== 'string' ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email and password are required.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters.'
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPublicId =
      typeof publicId === 'string' ? publicId.trim() : '';

    const allowedRoles = ['Junior', 'Senior', 'Alumni'];
    const selectedRole = role || 'Junior';

    if (!allowedRoles.includes(selectedRole)) {
      return res.status(400).json({
        success: false,
        message: 'Please select a valid role.'
      });
    }

    const existingUser = await User.findOne({
      email: normalizedEmail
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: existingUser.emailVerified === false
          ? 'An account with this email is awaiting verification. Please contact support to request a new OTP.'
          : 'User already exists. Please log in.'
      });
    }

    if (normalizedPublicId) {
      const existingPublicId = await User.findOne({
        publicId: normalizedPublicId
      });

      if (existingPublicId) {
        return res.status(409).json({
          success: false,
          message: 'This Public ID is already taken.'
        });
      }
    }

    const otp = crypto.randomInt(100000, 1000000).toString();
    const passwordHash = await bcrypt.hash(password, 12);

    createdUser = new User({
      fullName: fullName.trim(),
      email: normalizedEmail,
      passwordHash,
      role: selectedRole,
      publicId: normalizedPublicId || undefined,
      avatar: avatar || 'avatar-1',
      skills: Array.isArray(skills) ? skills : [],
      interests: Array.isArray(interests) ? interests : [],
      joinedChannels: ['dsa', 'web-dev', 'placements'],
      connectedMentors: [],
      savedResources: [],
      emailVerified: false,
      emailVerificationOtpHash: hashOtp(otp),
      emailVerificationOtpExpires: new Date(
        Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000
      )
    });

    await createdUser.save();

    try {
      await sendVerificationEmail(normalizedEmail, otp);
    } catch (emailError) {
      console.error('OTP email sending failed:', emailError.message);

      await User.deleteOne({ _id: createdUser._id });
      createdUser = null;

      return res.status(503).json({
        success: false,
        message: 'Unable to send verification email. Check email configuration and try again.'
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Verification OTP sent to your email.',
      email: normalizedEmail,
      requiresVerification: true
    });
  } catch (error) {
    console.error('Signup error:', error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Email or Public ID already exists.'
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Unable to create account. Please try again.'
    });
  }
});

// VERIFY OTP: POST /api/auth/verify-otp
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body || {};

    if (
      typeof email !== 'string' ||
      !email.trim() ||
      typeof otp !== 'string' ||
      !/^\d{6}$/.test(otp.trim())
    ) {
      return res.status(400).json({
        success: false,
        message: 'Enter a valid email and 6-digit OTP.'
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase()
    }).select(
      '+emailVerificationOtpHash +emailVerificationOtpExpires'
    );

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Account not found. Please sign up again.'
      });
    }

    if (user.emailVerified === true) {
      return res.status(200).json({
        success: true,
        message: 'Email is already verified.',
        user: createPublicUser(user)
      });
    }

    if (
      !user.emailVerificationOtpHash ||
      !user.emailVerificationOtpExpires ||
      user.emailVerificationOtpExpires.getTime() < Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: 'OTP has expired. Please sign up again or request a new OTP.'
      });
    }

    const submittedHash = hashOtp(otp.trim());

    const hashesMatch = crypto.timingSafeEqual(
      Buffer.from(submittedHash, 'hex'),
      Buffer.from(user.emailVerificationOtpHash, 'hex')
    );

    if (!hashesMatch) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect OTP. Please try again.'
      });
    }

    user.emailVerified = true;
    user.emailVerificationOtpHash = undefined;
    user.emailVerificationOtpExpires = undefined;

    await user.save();

    return res.status(200).json({
      success: true,
      message: 'Email verified successfully.',
      user: createPublicUser(user)
    });
  } catch (error) {
    console.error('OTP verification error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to verify OTP. Please try again.'
    });
  }
});

// LOGIN: POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (
      typeof email !== 'string' ||
      !email.trim() ||
      typeof password !== 'string' ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.'
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase()
    }).select('+passwordHash');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    if (user.emailVerified === false) {
      return res.status(403).json({
        success: false,
        message: 'Please verify your email using the OTP before logging in.'
      });
    }

    const storedPassword = user.passwordHash || '';
    let passwordMatches = false;

    if (/^\$2[aby]\$/.test(storedPassword)) {
      passwordMatches = await bcrypt.compare(
        password,
        storedPassword
      );
    } else {
      // Migrate legacy plaintext passwords to bcrypt hashes.
      passwordMatches = password === storedPassword;

      if (passwordMatches) {
        user.passwordHash = await bcrypt.hash(password, 12);
        await user.save();
      }
    }

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      user: createPublicUser(user)
    });
  } catch (error) {
    console.error('Login error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to log in. Please try again.'
    });
  }
});

export default router;
