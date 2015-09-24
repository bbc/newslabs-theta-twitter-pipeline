var express = require('express'),
    router = express.Router(),
    fs    = require('fs'),
    utils = require(__dirname + '/../lib/utils'),
    Q = require('q');

router.post('/', function(req, res) {
    utils.generateFileName("jpg")
    .then(function(filename){
        fs.rename('./public/images/'+req.body.image, __dirname + '/../output/' + filename, function(err) {
            return res.render('index', { title: '360 Photobooth', message: 'Image moved to publishing folder'});
        });
    });
});

module.exports = router;
