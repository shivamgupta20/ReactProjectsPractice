const moviesSchema = require("./db/movies.schema");
const debug = require('debug')('sd:models:db:movies.schema');

function removeUndefinedKeys(args) {
    debug('removeUndefinedKeys', args);
    const result = JSON.parse(JSON.stringify(args));
    debug('removeUndefinedKeys', result);
    return result;
    debug('movies.model removeUndefinedKeys')
}

async function getAll(where) {
    const { title, releaseDate, duration, genre, description } = where;
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
        where: removeUndefinedKeys({
            title,
            releaseDate,
            duration,
            genre,
            description
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
        description } = args;
    const movie = await moviesSchema.create({
        title,
        releaseDate,
        duration,
        genre,
        description
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

module.exports = {
    getAll,
    create,
    remove
};