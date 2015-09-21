import sys
import os
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from send_to_twitter import send_to_twitter

# Consumer keys and access tokens, used for OAuth
consumer_key = ''
consumer_secret = ''
access_token = ''
access_token_secret = ''


def convert(path):
    print "watermarking and resizing..."
    os.system("composite -dissolve 90% -gravity southeast watermark.png " + path + " out.png")
    os.system("convert out.png -resize 30% outout.png")

    # @TODO ERROR HANDLING
    print "sending to twitter..."
    send_to_twitter("outout.png")
    print "done!"


class CreatedHandler(FileSystemEventHandler):

    def on_created(self, event):

        if event.is_directory:
            return
        filepath, ext = os.path.splitext(event.src_path)
        if (ext == '.jpg'):
            print "Found new picture at", event.src_path
            convert(event.src_path)

if __name__ == "__main__":
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    event_handler = CreatedHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
