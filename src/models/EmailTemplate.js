const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, unique: true },
  subject: String,
  htmlContent: String,
  variables: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EmailTemplate', schema);
