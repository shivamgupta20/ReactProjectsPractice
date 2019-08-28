const Joi = require('joi');

module.exports = {
    getAll: {

        title: [Joi.string(), Joi.string().allow('')],
        releaseDate: [Joi.string().length(24), Joi.string().allow('')],
        duration: [Joi.number().precision(2).min(0.00), Joi.string().allow('')],
        genre: [Joi.string(), Joi.string().allow('')],
        description: [Joi.string(), Joi.string().allow('')]
    },

    remove: {
        params: {
            id: Joi.number().positive().required(),
        },
    }
}