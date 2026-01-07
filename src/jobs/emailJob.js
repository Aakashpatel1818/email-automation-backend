const Bull = require('bull');
const redis = require('../config/redis');
const smtpService = require('../services/smtpService');

const emailQueue = new Bull('email', process.env.REDIS_URL);

emailQueue.process(async (job) => {
  const { email, subject, html } = job.data;
  
  try {
    await smtpService.sendEmail(email, subject, html);
    return { success: true };
  } catch (error) {
    throw error;
  }
});

module.exports = emailQueue;
