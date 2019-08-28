const Sequelize = require('sequelize');
const sequelize = require('./connection');
const Movies = require('./movies.schema');
const Contacts = require('./contacts.schema');
const debug = require('debug')('sd:models:db:cast.schema');

const Cast = sequelize.define(
    "cast", {
        _id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                notEmpty: true
            }
        },
        moviesId: {
            type: Sequelize.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        contactsId: {
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

Cast.belongsTo(Movies);
Cast.belongsTo(Contacts);

sequelize.sync({ force: false })
    .then(() => {
        debug("Casts table is created if not present");
    })
    .catch(error => {
        debug("/// oooh, did you enter the wrong credentials", error);
    })

module.exports = Cast;