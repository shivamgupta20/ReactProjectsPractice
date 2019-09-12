var express = require('express');
var carouselImagesController = require('../controllers/carousel-images.controller');
const router = express.Router();
const debug = require('debug')('sd:routes:carousel-images.routes');
const authentication = require('../helpers/authentication.helper');
const { authorization, policyNames } = require('../helpers/authorization.helper');
var validations = require('./validations/carousel-images.validations');
const validate = require('express-validation');

router.route('/cimages')
    .all(authentication.authenticate)
    .all(authorization.enforcePolicy(policyNames.CRUD_ALL_RECORDS))
    .get(validate(validations.getAll), (req, res, next) => carouselImagesController.getAll(req, res, next))
    .post((req, res, next) => carouselImagesController.create(req, res, next));

module.exports = router;