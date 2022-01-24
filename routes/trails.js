var express = require('express');
var router = express.Router();

router.get('/trails', function (req, res, next) {
    res.send('trails');
});

module.exports = router;