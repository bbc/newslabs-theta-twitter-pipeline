var fs = require("fs"),
    Q = require('q');

var localAudioDirectory = __dirname + '/../public/audio/';

module.exports = new function() {

    _self = this;

    this.generateFileName = function(extension) {
        var deferred = Q.defer();

        var randomString = this.getRandomString(16);
        var self = this;
        fs.exists(localAudioDirectory+randomString+"."+extension, function(exists) {
            if (exists) {
                self.generateFileName(extension);
            } else {
                deferred.resolve(randomString+"."+extension);
            }
        });
        return deferred.promise;
    };

    this.getRandomString = function(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    };

    this.removeFolderSync = function(dirPath) {
      var files;
      try {
        files = fs.readdirSync(dirPath);
      }
      catch(e) {
        return;
      }
      if (files.length > 0)
        for (var i = 0; i < files.length; i++) {
          var filePath = dirPath + '/' + files[i];
          if (fs.statSync(filePath).isFile())
            fs.unlinkSync(filePath);
          else
            _self.removeFolderSync(filePath);
        }
      fs.rmdirSync(dirPath);
    };

    this.getFileNameFromURI = function(uri) {
      if (typeof uri === 'string' && uri.indexOf('/') != -1) {
        return uri.substring(uri.lastIndexOf('/') + 1);
      }
      return null;
    };

    return this;

};
