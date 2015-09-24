var express = require('express');
var router = express.Router();
var fs    = require('fs');
var Theta = require('ricoh-theta');

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
          console.log('picture saved => tmp.jpg', err);
          theta.disconnect();
          return res.render('index', { title: '360 Photobooth', image: 'tmp.jpg' });
        });
      });
    });    

});

module.exports = router;
