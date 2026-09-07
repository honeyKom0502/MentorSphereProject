
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    passwordHash: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ['Junior', 'Senior', 'Alumni'],
      default: 'Junior'
    },

    publicId: {
      type: String,
      unique: true,
      sparse: true
    },

    avatar: {
      type: String,
      default: 'avatar-1'
    },

    skills: {
      type: [String],
      default: []
    },

    interests: {
      type: [String],
      default: []
    },

    joinedChannels: {
      type: [String],
      default: []
    },

    connectedMentors: {
      type: [String],
      default: []
    },

    savedResources: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

export default User;

