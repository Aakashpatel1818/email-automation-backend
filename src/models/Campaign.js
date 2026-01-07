const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  emailList: [{ email: String, status: String, sentAt: Date }],
  template: { type: String, required: true },
  status: { type: String, default: 'pending' },
  totalEmails: { type: Number, default: 0 },
  sentCount: { type: Number, default: 0 },
  failedCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', schema);
