import express from 'express';
import cors from 'cors';
import { moderationService } from './services/moderationService.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    product: 'MentorSphere',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Moderation API Route
app.post('/api/moderation/check', async (req, res) => {
  try {
    const { text } = req.body;
    const result = await moderationService.evaluateMessage(text);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Moderation evaluation failed', details: err.message });
  }
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 MentorSphere Backend API server running on port ${PORT}`);
  });
}

export default app;
