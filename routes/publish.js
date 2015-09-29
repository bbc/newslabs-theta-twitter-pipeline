var express = require('express'),
    router = express.Router(),
    fs    = require('fs'),
    utils = require(__dirname + '/../lib/utils'),
    Q = require('q');

router.post('/', function(req, res) {
    utils.generateFileName("jpg")
    .then(function(filename){
        fs.rename('./public/images/'+req.body.image, './public/images/output/' + filename, function(err) {
            console.log('moved file to ','/images/output/"'+filename, 'or.. ', err);
            return res.render('index', { title: '360 Photobooth', message: 'Image published', link: '/images/output/'+filename});
        });
    });
});

module.exports = router;
