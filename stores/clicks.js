module.exports = store  //Export the function called store.

function store (state, emitter) {  //And he we define that function!  
//State, emitter are commonly included in choo functions--they are the heart of choo.
  
//For state, this means 'state of the app' which is  big object, with many properties.
//Within this function, we give that state two more properties, and their starting values.
  state.totalClicks = 0  //start out the totalClicks as 0.
  state.zachiscool = true //let's see if this works.


//Now we should talk about emitters, as they are used extensively throughout a choo framework.  They
//are part of the central philosophy of choo.  As it says in their docs:
//'Choo is entirely event-driven. It follows the paradigm of "data down, events up". This means
//that in views, only data is ever passed down — and to trigger something in a parent node, an
//event is emitted.'
//So what are emitters or events?  The definition of emit is to give out energy, in whatever form
//that takes.  So an emitter is the thing that is giving out energy: sound, light, smell, data
//what-have-you.
//
//In regards to Choo's 'emitter', it might be useful to think of it like the bell placed on the door
//of a shoppe, that chimes whenever someone new enters.  The bell is the emitter, as it is emitting
//its energy through sound.  But for that to happen, it must be placed ON something, so that thing
//can signal when the bell should chime.  That something, then  is a door, which makes an
//event out of being opened.  When the event of 'door opening!' occurs on the door, the chime
//wakes up and rings its' bell.  
//
//Because we are in computers, and thus in the realm of magic, our emitters' actions are limited only
//by our imagination. They are like a chime placed on a door, but this chime can make a sound,
//or display a video, or turn into a door itself.  If you can imagine the energy you want emitted, and articulate it,
//it will become manifest.  So for choo emitter's you name the event you're listening to, and then you 
//describe the exact emission you want.
  
//If we were to write our shoppe bell as a choo function it would look like this:
//emitter.on('DoorOpening', makeSound('chime'))
//
//This says, "place our emitter on the DoorOpening event, and when that event happens perform our
//makeSound function, telling this function to make the specific 'chime' sound.
//
//so you can have many emitters placed all over your site, they are all called the same way:
//emitter.on(thing, functionToDo()).  I am picturing the emitter as this, like, small gray blob that
//you throw onto a thing and it latches on with a putty grip, then magically transforms into the right
//tool for the job-over here it's a bell, over there it's a video screen, over there it's a tick counter.
//
//So let's check out this sweet 'clicks.js' function!
  emitter.on('DOMContentLoaded', function () {//place the emitter onto 'DOMContentLoaded'. In other words,
  //listenfor when the entire webpage loads.  When that happens run a function that....
    emitter.on('clicks:add', function (count) {//makes ANOTHER emitter!  This one is listening to our
      //'clicks.add' event, and when that happens it does a function that takes a single argument we
      //are calling 'count'
      state.totalClicks += count //the emitter pulls up the totalClick's property from our page's state and 
      //increase it by the count.
      emitter.emit(state.events.RENDER)//Then it does it's big emission, which is to render the page 
      //(updating our click tally.)
    })
  })
}
