const express = require('express');
const router = express.Router();

const favoritesCtrl = require('../controllers/favorites');

router.get('/favorites', favoritesCtrl.index);
router.post('/trails/:id/favorites', favoritesCtrl.create);

module.exports = router;