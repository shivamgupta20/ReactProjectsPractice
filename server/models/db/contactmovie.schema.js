const Sequelize = require('sequelize');
const sequelize = require('./connection');
const debug = require('debug')('sd:models:db:ContactMovie.schema');

const ContactMovie = sequelize.define(
    "ContactMovie", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        category: {
            type: Sequelize.STRING,
            validate: {}
        }

    },
    {
        timestamp: true,
        paranoid: true,
        version: true
    }
);

sequelize.sync({ force: false })
    .then(() => {
        debug('ContactMovie table created if not already present');
    })
    .catch(error => {
        debug('oooh, did you enter wrong database credentials?', error)
    })


module.exports = ContactMovie;