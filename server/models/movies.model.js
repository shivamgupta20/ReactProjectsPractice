const moviesSchema = require("./db/movies.schema");
const debug = require('debug')('sd:models:db:movies.schema');
// const Contact = require('./contact.model')
const Contact = require('../models/db/contact.schema');
const ContactMovie = require('../models/db/contactmovie.schema')

function removeUndefinedKeys(args) {
    debug('removeUndefinedKeys', args);
    const result = JSON.parse(JSON.stringify(args));
    debug('removeUndefinedKeys', result);
    return result;
    debug('movies.model removeUndefinedKeys')
}

async function getAll(where) {
    debug('movies.model.where', where)
    const { _id, title, releaseDate, duration, genre, description, language } = where;
    if (where.title)
        title = where.title;
    if (where.releaseDate)
        releaseDate = where.releaseDate;
    if (where.duration)
        duration = where.duration
    if (where.genre)
        genre = where.genre
    if (where.description)
        description = where.description
    const movies = await moviesSchema.findAll({
        include:
        {
            model: Contact
        },
        where: removeUndefinedKeys({
            _id,
            title,
            releaseDate,
            duration,
            genre,
            description,
            language
        })
    }).map
        (el => el.get({
            plain: true
        }));
    return movies;
}

async function create(args) {
    const { title,
        releaseDate,
        duration,
        genre,
        description,
        language
    } = args;
    const movie = await moviesSchema.create({
        title,
        releaseDate,
        duration,
        genre,
        description,
        language
    });
    return movie.get({
        plain: true
    })
}

async function remove(args) {
    const { _id, userId } = args;
    const affectedCount = await moviesSchema.destroy({
        where: removeUndefinedKeys({
            _id, userId
        })

    });
    debug('remove', affectedCount);
    return affectedCount;
}

async function update(_id, args) {
    const {
        title,
        releaseDate,
        duration,
        genre,
        description,
        image,
        language
    } = args;
    const response = await moviesSchema.update(removeUndefinedKeys({
        title,
        releaseDate,
        duration,
        genre,
        description,
        image,
        language
    }), {
            where: removeUndefinedKeys({
                _id
            })
        });
    const affectedCount = response[0];
    debug('update', affectedCount);
    return affectedCount;
}

module.exports = {
    getAll,
    create,
    remove,
    update
};