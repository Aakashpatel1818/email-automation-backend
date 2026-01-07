const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  campaignId: mongoose.Schema.Types.ObjectId,
  email: String,
  status: { type: String, enum: ['sent', 'failed', 'pending'] },
  errorMessage: String,
  retryCount: { type: Number, default: 0 },
  sentAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmailLog', schema);
