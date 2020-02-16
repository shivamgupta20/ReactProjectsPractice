var createError = require('http-errors');
const contactmovieModel = require('../models/contactmovie.model')
const debug = require('debug')('sd:controllers:contactmovie.controller');

async function create(req, res, next) {
    const args = req.body;
    const conmov = await contactmovieModel.create(args)
    res.json({
        ok: true,
        cast: conmov,
        message: "cast records successfully created"
    });
}

module.exports = {
    create
}