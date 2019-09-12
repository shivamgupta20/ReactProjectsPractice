const Sequelize = require("sequelize");
const sequelize = require("./connection");
const debug = require('debug')('sd:models:db:show-time.schema');
const Movies = require('./movies.schema');
const MovieScreen = require('./movie-screens.schema');

const ShowTime = sequelize.define(
    "showTime", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        screenId: {
            type: Sequelize.INTEGER,
            validate: {
                NotEmpty: true
            }
        },
        moviesId: {
            type: Sequelize.INTEGER,
            validate: {
                NotEmpty: true
            }
        },
        StartTime: {
            type: Sequelize.TIME,
            validate: {
                NotEmpty: true
            }
        }
    }, {
        timestamp: true,
        paranoid: true,
        version: true
    }
);

ShowTime.belongsTo(Movies);
ShowTime.belongsTo(MovieScreen);

sequelize.sync({ force: false })
    .then(() => {
        debug('Show Time table created successfully if not present');
    })
    .catch(error => {
        debug('ooh, did you enter the wrong database credentials?', error);
    })

module.exports = ShowTime;