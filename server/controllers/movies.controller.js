var createError = require('http-errors');
const moviesModel = require('../models/movies.model')
const debug = require('debug')('sd:controllers:movies.controller');

async function getAll(req, res, next) {
    // debug('getAll, req.query', req.query);
    debug('getAll, req.body', req.user);
    const _id = req.params.id;
    const {
        title,
        releaseDate,
        duration,
        genre,
        description,
        image } = req.query;
    // const { _id } = req.params.id;
    const movs = await moviesModel.getAll({
        _id,
        title,
        releaseDate,
        duration,
        genre,
        description,
        image
    })
    debug('getAll movs _id', _id);
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

async function update(req, res, next) {
    debug('movies.controller update', req.body);
    const _id = req.params.id;
    const args = req.body;
    const { title,
        releaseDate,
        duration,
        genre,
        description,
        image } = args;
    const affectedCount = await moviesModel.update(_id, {
        title,
        releaseDate,
        duration,
        genre,
        description,
        image
    });
    if (affectedCount) {
        return res.json({
            ok: true,
            message: 'movie record updated successfully.'
        })
    }
    else {
        return next(new createError.NotFound());
    }
}

module.exports = {
    getAll,
    create,
    remove,
    update
};