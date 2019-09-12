const Joi = require('joi');

module.exports = {
    getAll: {
        category: [Joi.string(), Joi.string().allow('')]
    }
}