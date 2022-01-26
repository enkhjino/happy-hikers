const Trail = require('../models/trail');

module.exports = {
    index,
    new: newTrail,
    create,
    show,
    edit,
    delete: deleteTrail,
    update
};

function update(req, res) {
    console.log(req.params.id);
    Trail.findOneAndUpdate({ "trail._id": req.params.id }, req.body,
        { new: true }, function (err, trail) {
            trail.save();
            if (err || !trail) return res.redirect('/trails');
            res.redirect(`/trails/${trail.id}`);
        }
    );
}

function deleteTrail(req, res) {
    console.log(req.params.id)
    Trail.findOneAndDelete(
        req.params.id, function (err) {
            res.redirect('/trails');
        }
    );
}


function edit(req, res) {
    Trail.findById(req.params.id, function (err, trail) {
        if (err) return res.redirect('/trails');
        res.render('trails/edit', { title: 'Edit trail', trail });
    });
}

function show(req, res) {
    Trail.findById(req.params.id)
        .populate('user')
        .exec(function (err, trail) {
            res.render('trails/show', { title: 'Trail Detail', trail });
        });
}


function create(req, res) {
    const trail = new Trail(req.body);
    trail.user = req.user._id;
    trail.save(function (err) {
        if (err) return res.redirect('/trails/new');
        res.redirect(`/trails/`);
    });
}

function index(req, res) {
    Trail.find({}).populate("user").exec()
        .then(function (trails) {
            res.render('trails/index', { title: 'All Trails', trails });
        })
        .catch(function (err) {
            res.redirect('/trails');
        });
}

function newTrail(req, res) {
    res.render('trails/new', { title: 'Add new trail', validDifficulty: Trail.schema.path('difficulty').enumValues, validDistance: Trail.schema.path('unit').enumValues })
}