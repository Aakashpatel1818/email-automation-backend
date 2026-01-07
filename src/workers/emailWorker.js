const emailQueue = require('../jobs/emailJob');

emailQueue.on('completed', (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

emailQueue.on('failed', (job, error) => {
  console.error(`❌ Job ${job.id} failed: ${error.message}`);
});

module.exports = emailQueue;
