# 360 selfie pipeline

To be used at R1XTRA Bradford event.

## Install Python app

* `pip install watchdog tweepy`
* `sudo apt-get install imagemagick`
* Get your consumer keys and secrets from dev.twitter.com
* `mkdir public/images/`
* `mkdir public/images/output`

## Run

Run `monitor_additions.py ./public/images/output. As soon as an image (`.jpg`, can be changed) lands in the directory (optional), this image will be watermarked, resized, and sent to Twitter.

## Install node app

* `npm install`

## Run node app

* `npm start`
* Go to `localhost:3000`
* Ensure your Ricoh Theta is on and you are connected to its wifi.

# License

[PDD/Unlicense](http://choosealicense.com/licenses/unlicense/)
