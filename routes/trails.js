var express = require('express');
var router = express.Router();
var trailsCtrl = require('../controllers/trails');
var isLoggedIn = require('../config/auth');

router.get('/', trailsCtrl.index);
router.get('/new', isLoggedIn, trailsCtrl.new);

module.exports = router;