class ErrorClassifier {
  classify(error) {
    if (error.code === 'ECONNREFUSED') {
      return { type: 'TRANSIENT', retryable: true };
    }
    if (error.code === 429) {
      return { type: 'RATE_LIMIT', retryable: true };
    }
    if (error.message.includes('Invalid email')) {
      return { type: 'VALIDATION', retryable: false };
    }
    return { type: 'PERMANENT', retryable: false };
  }
}

module.exports = new ErrorClassifier();
