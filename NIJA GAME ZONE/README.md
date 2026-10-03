# NAIJA GAMEZONE

A beginner-friendly static gaming platform for Nigerian gamers. The project uses HTML5, CSS3, JavaScript, Bootstrap 5, and no backend yet.

## Project Pages

- `index.html` - Homepage
- `free-games.html` - Free PC games directory
- `pc-games.html` - PC game category catalog
- `mobile-games.html` - Android and iOS game catalog
- `cross-platform-games.html` - PC and mobile availability catalog
- The three catalogs share `js/catalog.js`, which contains 38 entries and 34 unique game titles.
- `device-checker.html` - PC and mobile compatibility estimate
- `news.html` - Demonstration gaming newsroom
- `gear.html` - Demonstration gaming gear catalog
- `tournaments.html` - Demonstration tournaments and registration form
- `community.html` - Static community content
- `contact.html` - Contact form with local validation

## Run Locally

The simplest option is to open `index.html` in a browser.

For a local web server, use one of these options:

1. Open the folder in VS Code and install the Live Server extension.
2. Right-click `index.html` and choose **Open with Live Server**.
3. Or run a simple server from the project folder if Python is installed:

```text
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Build

There is no build step yet. This is intentional so the code stays easy to explain during a school viva. Bootstrap and Google Fonts are loaded from public CDNs.

## Content Safety

- Demonstration articles, tournaments, products, and social links are labeled or clearly described as placeholders.
- Free-game buttons point to official publisher or store pages.
- Gear prices, affiliate partnerships, stock, and availability are not claimed.
- Contact and tournament forms validate in the browser only. They do not send or store data.
- The device checker compares only verified minimum requirements and never guarantees performance.
- Category catalogs use official destination links and label unavailable requirements instead of inventing them.
- Catalog filters support genre, price, multiplayer, cross-play, search, clear filters, and release sorting.

## Future Backend Work

A backend could later provide:

- User accounts and secure sign-in
- SQLite or another database for news, products, tournaments, and community posts
- An editor dashboard for reviewing content
- Contact email delivery with spam protection
- Tournament registration storage and payment integration
- Newsletter subscriptions
- Affiliate tracking and disclosure management
- Ad network and sponsorship reporting

Private API keys and email credentials should stay in server environment variables. They should never be placed in frontend JavaScript.

## Publishing for Free

The project can be published as a static site with GitHub Pages, Netlify, or Cloudflare Pages:

1. Create a Git repository and push this folder.
2. Connect the repository to the hosting provider.
3. Select the project root as the publish directory.
4. Deploy without adding a build command.
5. Test every page and external link after deployment.

## Maintenance Checklist

- Replace demonstration content only after verifying the source.
- Review official game requirements and download links regularly.
- Add author names, source links, and dates to live news.
- Add sponsorship and affiliate disclosures before monetized content.
- Test forms after connecting a backend.
- Check mobile layout and keyboard navigation before publishing changes.
