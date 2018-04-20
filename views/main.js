var html = require('choo/html')//take the html renderer from the choo framework. call it 'html'

var TITLE = 'sample-choo-app - main' //make a variable called TITLE that is this string.

module.exports = view //export the function we calling 'view', which we'll define below.  
//exporting let's us import it in other areas, like the old HQ at index.js

function view (state, emit) {//here's that view function, that is aware of the page's state and can 
//emit things.  They are not as full-featured as an emitter.  emit can just shout things like
//'hey! a button was clicked!  does that matter to anyone?" and the emitter, defined in our
//click.js file, will say, 'it matters to me.'
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)//this is the title of the html page.
  //so if the title wasn't correct before it IS NOW.

  return html`
<!-- this is just good ol' html, being rendered by the function.  Nothing to see here until line 104 -->
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>1.</h2>
          <p>
            Welcome to your new Choo application.
            We're very happy you've made it this far.
          </p>

          <p>
            You're now in control of your own Choo app. The moment you decide to
            deploy it, it'll work offline and on any device.
          </p>

          <br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>2.</h2>

          <p>
            We've outfitted your project with a small selection of commands to
            help you achieve results faster:
          </p>

          <ul>
            <li class="mb3">
              <strong>npm start</strong><br>
              start your project for local development.
            </li>
            <li class="mb3">
              <strong>npm run build</strong><br>
              compile your project for production.
            </li>
            <li class="mb3">
              <strong>npm run inspect</strong><br>
              visualize your project's dependencies.
            </li>
            <li class="mb3">
              <strong>npm run create</strong><br>
              scaffold a new file.
            </li>
          </ul>

          <br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>3.</h2>

          <p>
            Your project also comes with a few directories. These names have
            special meanings for the build tool, so it's good to know what they
            do.
          </p>

          <ul>
            <li class="mb3">
              <strong>assets/</strong><br>
              Static files that can be served up, such as images and fonts.
            </li>
            <li class="mb3">
              <strong>components/</strong><br>
              Reusable fragments that can be composed into views.
            </li>
            <li class="mb3">
              <strong>stores/</strong><br>
              Pieces of logic that are shared by multiple components.
            </li>
            <li class="mb3">
              <strong>views/</strong><br>
              Combinations of components that are mapped to routes.
            </li>
          </ul>

          <br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>4.</h2>

          <p>
            So far we've provided you with one base view, <a
            href="/oh-no">one fallback view</a>, and one store. This serves
            as an example. A place to start from. It's your project now, so
            go ahead and delete them once you know how they work.
          </p>
<!-- hello again! So here is where the state and emit arguments come in, for that ol' 'choo magic' -->
          <p>Number of clicks stored: ${state.totalClicks}</p>
<!-- take a look at the state of our app, specifically the total clicks, and display whatever value is in that property.  
It starts at 0. -->

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
<!-- This button has an onclick event that, when clicked, signals the function handleClick, w
hich we'll define below (line 164)-->
            Emit a click event
          </button>

          <br><br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>5.</h2>

          <p>
            To make your development journey more pleasant, we've also
            included <a
            href="https://github.com/choojs/choo-devtools">devtools</a>. If
            you open your browser console, here's a selection of the
            commands that are at your disposal:

            <ul>
              <li class="mb3">
                <strong>choo.state</strong><br>
                Log the current application state.
              </li>
              <li class="mb3">
                <strong>choo.log</strong><br>
                Log the last 150 events received by the event bus.
              </li>
              <li class="mb3">
                <strong>choo.emit</strong><br>
                Emit an event inside the application event bus.
              </li>
              <li class="mb3">
                <strong>choo.help</strong><br>
                See an overview of all available commands.
              </li>
            </ul>
          </p>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>6.</h2>

          <p>
            And that's about it! Thanks for reading. If you have any
            questions, check out the <a  href="https://choo.io">docs</a> or reach
            out on <a href="https://github.com/choojs/choo">GitHub</a> or <a
            href="https://www.irccloud.com/irc/freenode/channel/choo">IRC</a>.
            We're online everyday, and always around to help. Happy hacking!
          </p>
        </section>
      </main>
    </body>
  `

//hey! here's that function triggered when our button is clicked.
    function handleClick () {
    emit('clicks:add', 1) /
     //it emits the signal 'clicks:add' 
     //and passes an item along with the signal: the number 1
  }
}
//Back in our click.js file, we have an emitter on the event 'clicks:add' that's just waiting for
//it's signal.  When it's received, it'll run a function that takes whatever item was passed along 
//with the clicks:add signal and add that item to the totalClicks tally in the webpage's state.  In
//other words, when you click a button, the number of totalClicks increases by 1, and then the whole
//page is re-rendered to show that.
//
//That's really it!
