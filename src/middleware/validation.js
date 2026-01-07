const joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details.message
      });
    }
    req.validatedData = value;
    next();
  };
};

module.exports = validateRequest;
