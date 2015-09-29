# 360 selfie pipeline

To be used at R1XTRA Bradford event.

## Install Python app

* `pip install watchdog tweepy`
* `sudo apt-get install imagemagick`
* Get your consumer keys and secrets from dev.twitter.com
* `mkdir public/images/`
* `mkdir public/images/output`

## Install node app

* `npm install`

## Run

Run `sh run.sh`. As soon as an image (`.jpg`, can be changed) lands in the directory (done by hitting "Publish" in the web app), this image will be watermarked, resized, and sent to Twitter.

*Just make sure you're connected to the Theta wifi.*

# License

[PDD/Unlicense](http://choosealicense.com/licenses/unlicense/)
