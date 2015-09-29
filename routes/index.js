var express = require('express')
    router = express.Router(),
    fs    = require('fs'),
    Theta = require('ricoh-theta'),
    exec = require('child_process').exec,
    Q = require('q');

/* GET home page. */
router.get('/', function(req, res) {
    return res.render('index', { title: '360 Photobooth' });
});

router.post('/', function(req, res) {
    
    var theta = new Theta();

    theta.connect('192.168.1.1') 
   
    theta.once('connect', function(){
        theta.capture(function(err){
            if(err) return console.error(err);
            console.log('capture success');
        });
    });

    // get picture
    theta.once('objectAdded', function(object_handle){
        theta.getPicture(object_handle, function(err, picture){

            fs.writeFile('./public/images/tmp.jpg', picture, function(err){
                console.log('picture saved => tmp.jpg');
                theta.disconnect();
                
                var deferred = Q.defer();
                var imagemagickCommand = "convert ./public/images/tmp.jpg -resize 150% -virtual-pixel HorizontalTile -background White -rotate 180 -distort Polar 0 -crop 50%x100%+1344+0 ./public/images/tmp.jpg";
                child = exec(imagemagickCommand, function (error, stdout, stderr) {
                    console.log("image converted to little planet");
                    if (error !== null || stderr.length > 0) {
                        console.log('exec error: ' + error + ' - ' + stderr);
                    }
                    console.log(stdout)
                    // var watermarkCommand = "composite ./public/images/watermark.png -dissolve 90%  -gravity center ./public/images/tmp.jpg ./public/images/tmp.jpg";
                    // child = exec(imagemagickCommand, function (error, stdout, stderr) {
                    //     console.log("Watermark added");
                    //     if (error !== null || stderr.length > 0) {
                    //         console.log('exec error: ' + error + ' - ' + stderr);
                    //     }
                    //     deferred.resolve(res.render('index', { title: '360 Photobooth', image: 'tmp.jpg' }));
                    // });
                deferred.resolve(res.render('index', { title: '360 Photobooth', image: 'tmp.jpg' }));
                });

                return deferred.promise;
                //convert tmp.jpg -virtual-pixel HorizontalTile -background Black -rotate 180 -distort Polar 0 polar2.jpg
                //convert tmp3.jpg -resize 150% -virtual-pixel HorizontalTile -background White -rotate 180 -distort Polar 0 -crop 50%x100%+1344+0 polar18.jpg
                //return res.render('index', { title: '360 Photobooth', image: 'tmp.jpg' });
            });
        });
    });    

});

module.exports = router;
