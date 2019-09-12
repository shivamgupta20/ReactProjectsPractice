const Sequilize = require("sequelize");
const sequelize = require("./connection");
const debug = require('debug')('sd:models:db:movie-screens.schema');
const Movies = require('./movies.schema');

const MovieScreen = sequelize.define(
    "movieScreens", {
        _id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        moviesId: {
            type: Sequilize.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        location: {
            type: Sequelize.STRING,
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

MovieScreen.belongsTo(Movies);

sequelize.sync({ force: false })
    .then(() => {
        debug("Movie Screens table created if not present");
    })
    .catch(error => {
        debug("/// oooh, did you enter wrong credentials?", error)
    })

module.exports = MovieScreen;