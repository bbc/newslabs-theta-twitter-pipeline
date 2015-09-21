import tweepy

# Consumer keys and access tokens, used for OAuth
consumer_key = ''
consumer_secret = ''
access_token = ''
access_token_secret = ''


def send_to_twitter(f):
    photo = f

    # OAuth process, using the keys and tokens
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    status = "New 360 selfie with @BBC_News_Labs!"
    api.update_with_media(photo, status=status)
