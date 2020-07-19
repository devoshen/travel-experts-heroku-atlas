# Travel Experts 
- TechCareers & SAIT CPRG-210 Assignment 3(Node Final)
- Due Date: 8:00PM Jul 26, 2020
- Stevyn Shen
- Assignment requirements: https://github.com/cprg210/assignments/blob/master/node-final/README.md

## Project Structure:
#### root folder
- server(app).js
- _build.js
- README.md
#### seeds folder
- travelGoals.js
#### models folder
- travelGoals.js
#### views folder
- index.ejs
- gallery.ejs
- gallery-single.ejs
- login.ejs
- register.ejs
- partial folder
  - css-global.ejs
  - footer.ejs
  - js-browser.ejs
  - js-toggle.ejs 
#### public folder
- images folder
- js folder
  - browser.js
  - toggle.js
  - destinations.js
  - gallery.js
- css folder
  - reset.css
  - typography.css
  - utilities.css
  - navbar.css
  - main.css
  - login.css
  - register.css
  - gallery.css

## Tasks & Problems:
#### Project setup
- Initialize using npm and setup dependencies
- Serve static assets from a public directory
- Return a custom 404 page when a file (or endpoint) cannot be found.
- Mongoose connection authenticated using .env file.
#### Views setup
- Move repeating page elements (header, footer, nav, etc) to partials directory
- Endpoint handlers to render and serve each page template
#### Schema/model definition
- Define Destinations Mongoose Schema in a dedicated /models directory.
- Based on the above schema, require your compiled Destination model into your app.
#### DB seed: Destination array
#### Dynamic HTML endpoint: GET /destinations/:id 
#### JSON API endpoint: GET /api/destinations
#### Frontend: Destinations gallery using fetch()

#### Additional requirements
- Each page should have a unique page <title>.
- The footer partial should contain a copyright notice for the current year using the moment module. Middleware!
- The current page should be indicated/highlighted in the global navigation (i.e. maybe the Contact link has a different background when the user is on the Contact page).
- The page should be readable and usable on mobile.


## Notes:
- Device tested: dektop, iphone 
- Browser tested: FireFox, Chrome
- GitHub repo: https://github.com/protechshen/travel-experts-heroku-atlas

## Attributes: 
- [CPRG-210 - Web Application Development](https://cprg210.github.io/)
- [FontAwesome](https://fontawesome.com/license/free)
- [Google Fonts](https://developers.google.com/fonts)
- [Lorem Picsum](https://picsum.photos)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn)

## Contributors: 
- Tony Grimes, Instructor
- TechCareers nerd, class of Summer 2020





