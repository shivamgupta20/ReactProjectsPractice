var createError = require('http-errors');
const carouselImagesModel = require('../models/carousel-images.model');
const debug = require('debug')('sd:controllers:carousel-images.controller');

async function getAll(req, res, next) {
    const {
        _id,
        category
    } = req.query;
    debug('getAll1');
    const images = await carouselImagesModel.getAll({
        _id,
        category
    })
    debug('getAll1', images);

    return res.json({
        ok: true,
        carouselImages: images,
        message: 'Carousel images successfully retrieved.'
    });
}

async function create(req, res, next) {
    const args = req.body;
    debug('sd:controller:carousel-images.controller create', req)
    const {
        image,
        category,
        moviesId
    } = args;
    const imageData = await carouselImagesModel.create({
        image,
        category,
        moviesId
    })
    res.json({
        ok: true,
        carouselImage: image,
        message: "carousel images added successfully."
    })
}

module.exports = { getAll, create };