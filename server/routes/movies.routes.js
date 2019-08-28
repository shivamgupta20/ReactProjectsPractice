var express = require('express');
var moviesController = require('../controllers/movies.controller');
const router = express.Router();
const debug = require('debug')('sd:routes:movies.routes');
const authentication = require('../helpers/authentication.helper');
const { authorization, policyNames } = require('../helpers/authorization.helper');
var validations = require('./validations/movies.validations');
const validate = require('express-validation');
var moviesController = require('../controllers/movies.controller')

router.route('/movies')
    .all(authentication.authenticate)
    .all(authorization.enforcePolicy(policyNames.CRUD_ALL_RECORDS))
    .get(validate(validations.getAll), (req, res, next) => moviesController.getAll(req, res, next))
    .post((req, res, next) => moviesController.create(req, res, next));

router.route('/movies/:id')
    .all(authentication.authenticate)
    .all(authorization.enforcePolicy(policyNames.CRUD_ALL_RECORDS))
    .delete(validate(validations.remove), (req, res, next) => moviesController.remove(req, res, next));

module.exports = router;