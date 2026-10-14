import mongoose from 'mongoose';

const ROLES = ['Junior', 'Senior', 'Alumni'];

const replySchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Public (anonymous) identity snapshot. Real name / email are never stored here.
  authorPublicId: { type: String, required: true, trim: true },
  authorAvatar: { type: String, default: 'avatar-1' },
  authorRole: { type: String, enum: ROLES, default: 'Junior' },
  content: { type: String, required: true, trim: true, maxlength: 3000 },
  upvotes: { type: Number, default: 0 },
  isAccepted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const discussionSchema = new mongoose.Schema(
  {
    channelId: { type: String, required: true, trim: true, index: true },
    title: { type: String, required: true, trim: true, maxlength: 200 },
    content: { type: String, required: true, trim: true, maxlength: 5000 },
    tags: { type: [String], default: [] },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    authorPublicId: { type: String, required: true, trim: true },
    authorAvatar: { type: String, default: 'avatar-1' },
    authorRole: { type: String, enum: ROLES, default: 'Junior' },

    upvotes: { type: Number, default: 0 },
    replies: { type: [replySchema], default: [] }
  },
  { timestamps: true }
);

discussionSchema.index({ createdAt: -1 });

export default mongoose.model('Discussion', discussionSchema);
