const Sequelize = require('sequelize');
const sequelize = require('./connection');
const debug = require('debug')('sd:models:db:contacts.schema');

const Contacts = sequelize.define(
    "contacts", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: Sequelize.STRING,
            validate: {}
        },
        Name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        DOB: {
            type: Sequelize.DATEONLY,
            validate: {
                isDate: true
            }
        },
        Description: {
            type: Sequelize.STRING,
            validate: {}
        },
        category: {
            type: Sequelize.ENUM('Actor', 'Producer', 'Director', 'Writer', 'Musician', 'Cinematographer', 'Editor'),
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

sequelize.sync({ force: false })
    .then(() => {
        debug("Contacts table created if not present");
    })
    .catch(error => {
        debug("oooh, did you enter wrong database credentials", error);
    })
module.exports = Contacts;