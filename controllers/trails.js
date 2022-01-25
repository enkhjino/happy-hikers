const Trail = require('../models/trail');

module.exports = {
    index,
    new: newTrail,
    create,
    show
};


function show(req, res) {
    Trail.findById(req.params.id, function (err, trail) {
        res.render('trails/show', { title: 'Trail Detail', trail });
    })
}


function create(req, res) {
    const trail = new Trail(req.body);
    console.log(trail);
    trail.save(function (err) {
        if (err) return res.redirect('/trails/new');
        res.redirect(`/trails/`);
    });
}

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
    res.render('trails/new', { title: 'Add new trail', validDifficulty: Trail.schema.path('difficulty').enumValues, validDistance: Trail.schema.path('unit').enumValues })
}