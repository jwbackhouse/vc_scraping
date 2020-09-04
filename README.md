# vc_scraping

Node.js tool to scrape vouchercloud.co.uk for the current promotions advertised by retailers / brands / restaurants. (This information is not available anywhere else, and even the companies themselves often have patchy records of what promotions they ran when.)

The list of companies to fetch is set in brands.json - the URL is typically obvious, but worth checking manually for edge cases (e.g. multi-word names).

Each industry group (sportswear, restaurants, etc.) are output into their own CSV file. The data is appended to the existing file.

This is intended to be run as a regular cron job.

Built using cheerio for DOM traversal and request for the HTTP calls.
