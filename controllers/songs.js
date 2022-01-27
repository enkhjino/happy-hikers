const Trail = require('../models/trail');
const Song = require('../models/song');

module.exports = {
    index,
    new: newSong,
    create
}
function create(req, res) {
    Song.create(req.body, function (err, song) {
        res.redirect('playlist');
    });
}

function newSong(req, res) {
    res.render('songs/new', { title: 'Add Song' });
}

function index(req, res) {
    Song.find({})
        .then(function (songs) {
            res.render('songs/index', { title: 'All Songs', songs });
        })
        .catch(function (err) {
            res.redirect('/playlist');
        });
}



