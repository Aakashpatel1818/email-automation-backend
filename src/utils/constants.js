module.exports = {
  STATUS: {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    FAILED: 'failed'
  },
  EMAIL_STATUS: {
    SENT: 'sent',
    FAILED: 'failed',
    PENDING: 'pending'
  },
  MAX_RETRIES: process.env.MAX_RETRIES || 3,
  RETRY_DELAY: process.env.RETRY_DELAY || 5000
};
