//The purpose of index.js: set up the initial app and fundamental dependencies, set up the routes
//one can go.  The headquarters of sorts for the app, that oversees what things should happen when.
//But 'how' they happen is decided in the individual files(like ./stores/clicks)

var css = require('sheetify') // bring in the sheetify module and assign it to the variable css.  sheetify minifies and bundles yr CSS--useful if you're using a tool like tachyons, where all yr css is in different modules and folders and such.  I can likely ignore this.

var choo = require('choo') // choo is the sturdy, tiny framework that is runnin this whole app.  So we bringing our train friend in and assigning it to our variable 'choo'.

css('tachyons') //sheetify my tachyons.  I can largely ignore this.  Tachyons is outside the scope of what i wanna do in this project, and I'd rather just right some sweet, vanilla css.  

var app = choo() // initialize choo, call it into being when you type 'app'. 

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}
//This if/else is for our deployment.  The site can run in two modes.  The dev mode is where I run the
//server and view the app on my local machine, at localhost:8080.  The production mode is when i've
//built and bundled up the whole app and want it to live on some server (like: app.coolguy.website).
//So, index.js is checking whether it's in the production environment or the dev environment.  if
//it's _not_ in production (env != 'production'), then it'll run choo-devtools and give you the
//ability to debug in the browser.  Else if it _is_ in production, then it'll use the service-worker
//instead, which helps set up the site for offline use.

app.use(require('./stores/clicks'))//  This is setting up the state of the entire app.  In other words 'the state the app is in'.  Everything within the app is aware of the state, and can change depending upon it.  So perhaps the app is in a state where it holds 5 different puppy pictures, and there's a view that displays the current state of puppy pictures (and so displays all 5).  Then, another function in the app _adds_ a puppy picture.  The state has updated to be 6 puppies, and that view updates to the current state to show 6 puppies now too.  Your stores, then, hold the states to be aware of.   A thing to test is how it works to have multiple stores of different states, or how easily stuff stored within clicks or other stores is passed around the app.

app.route('/', require('./views/main')) //When someone goes to the root directory (app.coolguy.website) render the main view.
app.route('/*', require('./views/404'))//If they go to any other directory (app.coolguy.website/nonsense), render a 404 view.

//This is a single page app, the view being shown changes, but the page itself doesn't.   This is
//fundamentally different from a static page site like coolguy.website, where when someone goes to
//coolguy.website/thing, they are directed from index.html to a wholly new webpage called
//thing.html,.  Here, you'd adjust your view
//appropriately, but keep them on the page.  The routes, then, are conveniences for sharing this
//particular _view_ of the app, not a particular page in the app. We are always on the same page.


module.exports = app.mount('body')//Mount this app within the 'body' tag of yr webpage.  It's like planting a flower in a specific patch of soil, and then watching it blossom as the page loads.


