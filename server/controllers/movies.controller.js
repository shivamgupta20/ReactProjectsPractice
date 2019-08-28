var createError = require('http-errors');
const moviesModel = require('../models/movies.model')
const debug = require('debug')('sd:controllers:movies.controller');

async function getAll(req, res, next) {
    debug('getAll', req.query);
    const { title,
        releaseDate,
        duration,
        genre,
        description } = req.query;
    const movs = await moviesModel.getAll({
        title,
        releaseDate,
        duration,
        genre,
        description
    })
    debug('getAll movs', movs);
    return res.json({
        ok: true,
        moviesList: movs,
        message: 'Movies List successfully retrieved.'
    });
}

async function create(req, res, next) {
    const args = req.body;
    debug('sd:controllers:movie.controller create', req);
    const {
        title,
        releaseDate,
        duration,
        genre,
        description
    } = args;
    const movie = await moviesModel.create({
        title,
        releaseDate,
        duration,
        genre,
        description
    })
    res.json({
        ok: true,
        movie: movie,
        message: "movie record successfully created"
    });
}

async function remove(req, res, next) {
    const _id = req.params.id;
    // debug('movies.controller', _id, req.params);
    const affectedCount = await moviesModel.remove({
        _id
    });
    debug('remove', affectedCount);
    if (affectedCount) {
        return ({
            ok: true,
            message: "Movie deleted successfully."
        })
    }
    else {
        return next(new createError.NotFound());
    }

}
module.exports = { getAll, create, remove };