const contactSchema = require('./db/contact.schema');
const debug = require('debug')('sd:models:db:contacts.schema');

function removeUndefinedKeys(args) {
    debug('removeUndefinedKeys', args);
    const result = JSON.parse(JSON.stringify(args));
    debug('removeUndefinedKeys', result);
    return result;
    debug('contact.model removeUndefinedKeys')
}

async function getAll(where) {
    // debug('contact.model.where', where)
    const { _id, name, dob, description } = where;
    if (where.name)
        name = where.name;
    if (where.dob)
        dob = where.dob;
    if (where.description)
        description = where.description;


    const contacts = await contactSchema.findAll({
        where: removeUndefinedKeys({
            _id,
            name,
            dob,
            description
        })
    }).map
        (el => el.get({
            plain: true
        }));
    return contacts;
}

async function create(args) {
    const { name, dob, description } = args;
    const contact = await contactSchema.create({
        name,
        dob,
        description
    });
    return contact.get({
        plain: true
    })
}

async function remove(args) {
    const { _id } = args;
    const affectedCount = await contactSchema.destroy({
        where: removeUndefinedKeys({
            _id
        })

    });
    debug('remove', affectedCount);
    return affectedCount;
}


async function update(_id, args) {
    const { name,
        dob,
        description,
        image } = args;
    const response = await contactSchema.update(removeUndefinedKeys({
        name,
        dob,
        description,
        image
    }), {
            where: removeUndefinedKeys({
                _id
            })
        });
    const affectedCount = response[0];
    debug('update', affectedCount);
    return affectedCount;
}


module.exports = {
    getAll,
    create,
    remove,
    update
};