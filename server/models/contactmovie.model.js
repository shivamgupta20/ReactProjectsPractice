const contactmovieSchema = require('./db/contactmovie.schema')
const debug = require('debug')('sd:models:db:contactmovies.model')

function removeUndefinedKeys(args) {
    debug('removeUndefinedKeys', args);
    const result = JSON.parse(JSON.stringify(args));
    debug('removeUndefinedKeys', result);
    return result;
    debug('contact.model removeUndefinedKeys')
}

async function create(args) {
    const contactmovie = await contactmovieSchema.bulkCreate(args)
        .map(el => el.get({
            plain: true
        }))
    return contactmovie
}

module.exports = {
    create
}