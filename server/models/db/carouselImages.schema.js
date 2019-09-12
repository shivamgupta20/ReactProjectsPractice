const Sequelize = require("sequelize");
const sequelize = require("./connection");
const debug = require('debug')('sd:models:db:carouselImages.schema');
const Movie = require('./movies.schema');

const CarouselImages = sequelize.define(
    "carouselimages", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: Sequelize.BLOB,
            defaultValue: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
            validate: {},
            get() {
                return this.getDataValue('image').toString('utf8');
            }
        },
        category: {
            type: Sequelize.ENUM('MOVIES'),
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        moviesId: {
            type: Sequelize.INTEGER,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamp: true,
        paranoid: true,
        version: true
    }
);
CarouselImages.belongsTo(Movie);
// Movies.hasMany(CarouselImages);

sequelize.sync({ force: false }).then(() => {
    debug('Carousel Images table created if not there, successfully.');
}).catch(error => {
    debug('// oooh, did you enter wrong database credentials?', error);
});

module.exports = CarouselImages;