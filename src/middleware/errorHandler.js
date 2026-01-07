const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    success: false,
    error: message,
    timestamp: new Date()
  });
};

module.exports = errorHandler;
