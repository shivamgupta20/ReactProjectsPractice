var createError = require('http-errors');
const castModel = require('../models/cast.model');
const debug = require('debug')('sd:controllers:cast.controller');

// debug('sd:models:db:cast.controller', castModel)

async function create(req, res, next) {
    const args = req.body;
    // debug('sd:controllers:cast.controller create')//, req);
    const {
        movieId,
        contactId,
        category
    } = args;
    const cast = await castModel.create({
        movieId,
        contactId,
        category
    })
    res.json({
        ok: true,
        cast: cast,
        message: "cast record successfully created"
    });
}

async function getAll(req, res, next) {
    // debug('getAll, req.query', req.query);
    // debug('getAll, req.body', req.user);
    debug('cast.controller get');//, req);

    const _id = req.params.id;
    const { movieId } = req.query;
    // const { _id } = req.params.id;
    debug(_id)
    debug(movieId)
    const cast = await castModel.getAll({
        _id,
        movieId
    })
    // debug('getAll contact _id', _id);
    return res.json({
        ok: true,
        castsList: cast,
        message: 'casts List successfully retrieved.'
    });
}

module.exports = {
    getAll,
    create
    // remove,
    // update
};