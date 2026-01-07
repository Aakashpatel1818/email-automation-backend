const joi = require('joi');

module.exports = {
  campaignSchema: joi.object({
    name: joi.string().required(),
    subject: joi.string().required(),
    template: joi.string().required(),
    emailList: joi.array().items(
      joi.object({ email: joi.string().email() })
    )
  }),

  emailSchema: joi.object({
    to: joi.string().email().required(),
    subject: joi.string().required(),
    html: joi.string().required()
  })
};
