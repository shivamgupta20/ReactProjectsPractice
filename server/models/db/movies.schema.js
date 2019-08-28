const Sequelize = require("sequelize");
const sequelize = require('./connection');
const debug = require('debug')('sd:models:db:movies.schema')

const Movies = sequelize.define(
    "movies", {
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
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB
        }
    }, {
        timestamp: true,
        paranoid: true,
        version: true
    }
);

sequelize.sync({ force: false })
    .then(() => {
        debug('Movies table created if not already present');
    })
    .catch(error => {
        debug('oooh, did you enter wrong database credentials?', error)
    })

module.exports = Movies;