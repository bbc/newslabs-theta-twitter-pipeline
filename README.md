# 360 selfie pipeline

To be used at R1XTRA Bradford event.

## Install

* `pip install watchdog tweepy`
* `sudo apt-get install imagemagick`
* Get your consumer keys and secrets from dev.twitter.com

## Run

Run `monitor_additions.py [dir]`. As soon as an image (`.jpg`, can be changed) lands in the directory (optional), this image will be watermarked, resized, and sent to Twitter.

# License

[PDD/Unlicense](http://choosealicense.com/licenses/unlicense/)
