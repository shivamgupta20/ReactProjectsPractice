const carouselImageSchema = require("./db/carouselImages.schema");
const debug = require('debug')('sd:models:db:carousel-images.model');

function removeUndefinedKeys(args) {
    debug('removeUndefinedKeys', args);
    const result = JSON.parse(JSON.stringify(args));
    debug('removeUndefinedKeys', result);
    return result;
    debug('carouselImages removeUndefinedKeys')
}

async function getAll(where) {
    const { _id, category } = where;
    if (where.category)
        category = where.category;

    const images = await carouselImageSchema.findAll({
        where: removeUndefinedKeys({
            _id,
            category
        })
    }).map
        (e1 => e1.get({
            plain: true
        }));
    debug('carousel-images.model');
    return images;
}

async function create(args) {
    const {
        image,
        category,
        moviesId
    } = args;
    const carouselImage = await carouselImageSchema.create({
        image,
        category,
        moviesId
    });
    return carouselImage.get({
        plain: true
    })
}

module.exports = {
    getAll,
    create
}