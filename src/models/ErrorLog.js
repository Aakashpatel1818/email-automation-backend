const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  campaignId: mongoose.Schema.Types.ObjectId,
  email: String,
  errorType: String,
  message: String,
  transient: Boolean,
  retryable: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ErrorLog', schema);
