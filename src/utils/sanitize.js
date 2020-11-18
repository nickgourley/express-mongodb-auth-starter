const { validate, ValidationError, Joi } = require('express-validation');

const loginValidation = {
    body: Joi.object({
    username: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .max(128)
        .required(),
    password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .max(128)
        .required(),
    }),
};

module.exports = { loginValidation, validate, ValidationError };