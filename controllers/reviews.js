const Trail = require('../models/trail');

module.exports = {
    create,
    delete: deleteReview
};

function deleteReview(req, res) {
    Trail.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id })
        .then(function (trail) {
            if (!trail) return res.redirect('/trails');
            trail.reviews.remove(req.params.id);
            return trail.save();
        })
        .then(function (trail) {
            res.redirect(`/trails/${trail._id}`);
        });
}

function create(req, res) {
    Trail.findById(req.params.id, function (err, trail) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        trail.reviews.push(req.body);
        trail.save(function (err) {
            res.redirect(`/trails/${trail._id}`);
        });
    });
}