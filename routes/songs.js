const express = require('express');
const router = express.Router();
var isLoggedIn = require('../config/auth');
const songsCtrl = require('../controllers/songs');

router.get('/new', isLoggedIn, songsCtrl.new);
router.get('/', songsCtrl.index);
router.post('/', songsCtrl.create);

module.exports = router;

