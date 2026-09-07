import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = express.Router();

// =====================================================
// SIGN UP
// POST /api/auth/signup
// =====================================================

router.post('/signup', async (req, res) => {
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
    } = req.body;

    // -----------------------------------------------
    // Basic validation
    // -----------------------------------------------

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email and password are required'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // -----------------------------------------------
    // Check if email already exists
    // -----------------------------------------------

    const existingUser = await User.findOne({
      email: email.toLowerCase().trim()
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists, please login'
      });
    }

    // -----------------------------------------------
    // Check if Public ID already exists
    // -----------------------------------------------

    if (publicId) {
      const existingPublicId = await User.findOne({
        publicId
      });

      if (existingPublicId) {
        return res.status(400).json({
          success: false,
          message: 'This Public ID is already taken. Please choose another one.'
        });
      }
    }

    // -----------------------------------------------
    // IMPORTANT
    //
    // For now we are storing the password directly
    // because your current project does not yet have
    // bcrypt implemented.
    //
    // We will secure this with bcrypt in the next step.
    // -----------------------------------------------

    const user = new User({
      fullName,
      email: email.toLowerCase().trim(),
      passwordHash: password,

      role: role || 'Junior',

      publicId: publicId || undefined,

      avatar: avatar || 'avatar-1',

      skills: skills || [],

      interests: interests || [],

      joinedChannels: [
        'dsa',
        'web-dev',
        'placements'
      ],

      connectedMentors: [],

      savedResources: []
    });

    // -----------------------------------------------
    // Save user to MongoDB
    // -----------------------------------------------

    await user.save();

    // -----------------------------------------------
    // Send response back to frontend
    // -----------------------------------------------

    res.status(201).json({
      success: true,

      message: 'User registered successfully!',

      user: {
        id: user._id,

        fullName: user.fullName,

        email: user.email,

        role: user.role,

        publicId: user.publicId,

        avatar: user.avatar,

        skills: user.skills,

        interests: user.interests,

        joinedChannels: user.joinedChannels,

        connectedMentors: user.connectedMentors,

        savedResources: user.savedResources,

        helpedCount: 0,

        questionsAsked: 0,

        discussionsParticipated: 0,

        createdAt: user.createdAt
      }
    });

  } catch (error) {

    console.error('Signup Error:', error);

    // -----------------------------------------------
    // Duplicate MongoDB key error
    // -----------------------------------------------

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email or Public ID already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});


// =====================================================
// LOGIN
// POST /api/auth/login
// =====================================================

router.post('/login', async (req, res) => {
  try {

    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // -----------------------------------------------
    // Find user
    // -----------------------------------------------

    const user = await User.findOne({
      email: email.toLowerCase().trim()
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Credentials'
      });
    }

    // -----------------------------------------------
    // Check password
    //
    // Temporary direct comparison.
    // We will replace this with bcrypt later.
    // -----------------------------------------------

    if (user.passwordHash !== password) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Credentials'
      });
    }

    // -----------------------------------------------
    // Successful login
    // -----------------------------------------------

    res.status(200).json({
      success: true,

      message: 'Login successful',

      user: {
        id: user._id,

        fullName: user.fullName,

        email: user.email,

        role: user.role,

        publicId: user.publicId,

        avatar: user.avatar,

        skills: user.skills,

        interests: user.interests,

        joinedChannels: user.joinedChannels,

        connectedMentors: user.connectedMentors,

        savedResources: user.savedResources,

        helpedCount: 0,

        questionsAsked: 0,

        discussionsParticipated: 0,

        createdAt: user.createdAt
      }
    });

  } catch (error) {

    console.error('Login Error:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
});

export default router;