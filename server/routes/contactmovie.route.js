var express = require('express');
const router = express.Router();
const debug = require('debug')('sd:routes:contactmovie.routes');
const authentication = require('../helpers/authentication.helper');
const { authorization, policyNames } = require('../helpers/authorization.helper');
var contactmovieController = require('../controllers/contactmovie.controller');

router.route('/casts')
    .all(authentication.authenticate)
    .all(authorization.enforcePolicy(policyNames.CRUD_ALL_RECORDS))
    .post((req, res, next) => contactmovieController.create(req, res, next)
    );


module.exports = router;    