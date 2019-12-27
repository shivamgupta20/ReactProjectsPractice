const Joi = require('joi');

module.exports = {
    getAll: {
        name: [Joi.string(), Joi.string().allow('')],
        dob: [Joi.string().length(24), Joi.string().allow('')],
        description: [Joi.string(), Joi.string().allow('')]
    },

    remove: {
        params: {
            id: Joi.number().positive().required(),
        },
    },

    update: {
        params: {
            id: Joi.number().positive().required(),
        },
    }

}