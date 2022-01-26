const Trail = require('../models/trail');

module.exports = {
    index,
    create
}
function index(req, res) {
    Trail.find({ favoritedBy: req.user._id }, function (err, trails) {
        res.render('favorites/index', { title: "Favorites", trails });
    });
}

function create(req, res) {
    Trail.findOne({ _id: req.params.id, favoritedBy: { $nin: req.user._id } }, function (err, trail) {
        if (!trail) return res.redirect('/favorites');
        trail.favoritedBy.push(req.user._id);
        trail.save(function (err) {
            res.redirect('/favorites');
        });
    });
}