const express = require('express');
const router = express.Router();
var isLoggedIn = require('../config/auth');
const songsCtrl = require('../controllers/songs');

router.get('/playlist/new', isLoggedIn, songsCtrl.new);
router.get('/playlist', songsCtrl.index);
router.post('/playlist', songsCtrl.create);

module.exports = router;

