const Sequelize = require("sequelize");
const sequelize = require('./connection');
const debug = require('debug')('sd:models:db:movies.schema')
const Contact = require('./contact.schema')
const MoviesContacts = require('./contactmovie.schema')

const Movie = sequelize.define(
    "movie", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        title: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            validate: {
                isDate: true
            }
        },
        duration: {
            type: Sequelize.INTEGER,
            validate: {
                max: 300
            }
        },
        genre: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: Sequelize.STRING(2000),
            validate: {}
        },
        language: {
            type: Sequelize.ENUM('Hindi', 'English'),
            validate: {

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
        fullimage: {
            type: Sequelize.STRING(2000),
            validate: {},
        }
    },
    {
        timestamp: true,
        paranoid: true,
        version: true
    }
);

Movie.belongsToMany(Contact, { through: MoviesContacts });

sequelize.sync({ force: false })
    .then(() => {
        debug('Movies table created if not already present');
    })
    .catch(error => {
        debug('oooh, did you enter wrong database credentials?', error)
    })

module.exports = Movie;