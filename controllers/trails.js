const Trail = require('../models/trail');

module.exports = {
    index,
    new: newTrail
};

function index(req, res) {
    Trail.find({})
        .then(function (trails) {
            res.render('trails/index', { title: 'All Trails', trails });
        })
        .catch(function (err) {
            res.redirect('/trails');
        });
}

function newTrail(req, res) {
    res.render('trails/new', { title: 'Add Trail' });
}