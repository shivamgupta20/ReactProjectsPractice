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
    const movies = moviesSchema.findAll({
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

module.exports = {
    getAll
};

