var createError = require('http-errors');
const contactModel = require('../models/contact.model')
const debug = require('debug')('sd:controllers:contacts.controller');

async function getAll(req, res, next) {
    const _id = req.params.id;
    const {
        name,
        dob,
        description } = req.query;
    // const { _id } = req.params.id;
    const contacts = await contactModel.getAll({
        _id,
        name,
        dob,
        description
    })
    debug('getAll contact _id', _id);
    return res.json({
        ok: true,
        contactsList: contacts,
        message: 'contacts List successfully retrieved.'
    });
}


async function create(req, res, next) {
    const args = req.body;
    debug("args=", args)
    // debug('sd:controllers:contact.controller create', req);
    const {
        name,
        dob,
        description,
        image
    } = args;
    const contact = await contactModel.create({
        name,
        dob,
        description,
        image
    })
    res.json({
        ok: true,
        contact: contact,
        message: "contact record successfully created"
    });
}

async function remove(req, res, next) {
    const _id = req.params.id;
    const affectedCount = await contactModel.remove({
        _id
    });
    debug('remove', affectedCount);
    if (affectedCount) {
        return ({
            ok: true,
            message: "Contact deleted successfully."
        })
    }
    else {
        return next(new createError.NotFound());
    }
}

async function update(req, res, next) {
    // debug('contact.controller update', req.body);
    const _id = req.params.id;
    const args = req.body;
    const { name,
        dob,
        description,
        image } = args;
    const affectedCount = await contactModel.update(_id, {
        name,
        dob,
        description
    });
    if (affectedCount) {
        return res.json({
            ok: true,
            message: 'contact record updated successfully.'
        })
    }
    else {
        return next(new createError.NotFound());
    }
}

module.exports = {
    getAll,
    create,
    remove,
    update
};