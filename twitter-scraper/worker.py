import sys

from twitter_scraper import TwitterScraper



def main(argv):
    keywords = [argv[2], argv[3]]
    num_tweets = argv[4]
    options = argv[1]
    scraper = TwitterScraper(keywords, num_tweets)
    print("Working...")
    return "Working"


if __name__ == "__main__":
    main(sys.argv)