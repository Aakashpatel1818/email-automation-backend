const joi = require('joi');

const schema = joi.object({
  NODE_ENV: joi.string().default('development'),
  PORT: joi.number().default(5000),
  MONGODB_URI: joi.string().required(),
  REDIS_URL: joi.string().required(),
}).unknown();

const { error, value } = schema.validate(process.env);
if (error) throw new Error(`Env validation: ${error}`);

module.exports = value;
