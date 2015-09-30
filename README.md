# 360 pipeline for publishing to Twitter from a Ricoh Theta

## Install Python app

* `pip install watchdog tweepy`
* `sudo apt-get install imagemagick`
* Get your consumer keys and secrets from dev.twitter.com
* `mkdir public/images/`
* `mkdir public/images/output`

## Install node app

* `npm install`

## Run python image handler

Run `sh run.sh`. As soon as an image (`.jpg`, can be changed) lands in the directory (done by hitting "Publish" in the web app), this image will be watermarked, resized, and sent to Twitter.

# License

[PDD/Unlicense](http://choosealicense.com/licenses/unlicense/)
