var express = require('express');
var router = express.Router();
var trailsCtrl = require('../controllers/trails');
var isLoggedIn = require('../config/auth');

router.get('/', trailsCtrl.index);
router.get('/new', isLoggedIn, trailsCtrl.new);
router.post('/', trailsCtrl.create);
router.get('/:id', trailsCtrl.show);
router.get('/:id/edit', trailsCtrl.edit);
router.delete('/:id', trailsCtrl.delete);
router.put('/:id', trailsCtrl.update);

module.exports = router;