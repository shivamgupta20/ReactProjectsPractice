const Sequelize = require('sequelize');
const sequelize = require('./connection');
const debug = require('debug')('sd:models:db:contact.schema')

const Contact = sequelize.define(
    "contact", {
        _id: {
            type: Sequelize.INTEGER,
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
        dob: {
            type: Sequelize.DATEONLY,
            validate: {
                isDate: true
            }
        },
        description: {
            type: Sequelize.STRING,
            validate: {}
        },
        image: {
            type: Sequelize.BLOB,
            defaultValue: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
            validate: {},
            get() {
                return this.getDataValue('image').toString('utf8');
            }
        },
        // category: {
        //     type: Sequelize.ENUM('Actor', 'Producer', 'Director', 'Writer', 'Musician', 'Cinematographer', 'Editor'),
        //     validate: {
        //         notEmpty: true
        //     }
        // }
    },
    {
        timestamp: true,
        paranoid: true,
        version: true
    }
);

sequelize.sync({ force: false })
    .then(() => {
        debug('Contacts table created if not already present');
    })
    .catch(error => {
        debug('oooh, did you enter wrong database credentials?', error)
    })

module.exports = Contact;