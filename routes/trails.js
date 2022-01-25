var express = require('express');
var router = express.Router();
var trailsCtrl = require('../controllers/trails');
var isLoggedIn = require('../config/auth');

router.get('/', trailsCtrl.index);
router.get('/new', isLoggedIn, trailsCtrl.new);
router.post('/', trailsCtrl.create);
router.get('/:id', trailsCtrl.show);


module.exports = router;