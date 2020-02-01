var express = require('express');
const router = express.Router();
const debug = require('debug')('sd:routes:contact.routes');
const authentication = require('../helpers/authentication.helper');
const { authorization, policyNames } = require('../helpers/authorization.helper');
var validations = require('./validations/contacts.validations');
const validate = require('express-validation');
var contactController = require('../controllers/contact.controller');

router.route('/contacts')
    .all(authentication.authenticate)
    .all(authorization.enforcePolicy(policyNames.CRUD_ALL_RECORDS))
    .get(validate(validations.getAll), (req, res, next) => contactController.getAll(req, res, next))
    .post((req, res, next) => contactController.create(req, res, next));

router.route('/contact/:id')
    .all(authentication.authenticate)
    .all(authorization.enforcePolicy(policyNames.CRUD_ALL_RECORDS))
    .delete(validate(validations.remove), (req, res, next) => contactController.remove(req, res, next))
    .put(validate(validations.update), (req, res, next) => { contactController.update(req, res, next) })
    .get(validate(validations.getAll), (req, res, next) => contactController.getAll(req, res, next))

module.exports = router;