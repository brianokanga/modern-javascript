// THE OBSERVER DESIGN PATTERN
const EventEmitter = require ('events');
const http = require ('http');

class Sales extends EventEmitter {
  constructor () {
    super ();
  }
}

const myEmitter = new Sales ();

// one pros of emitters is you can setup multiple events for the same listener

//Observer 1
// .on is the observer that waits
myEmitter.on ('newSale', () => {
  console.log ('There was a new sale');
});

//Observer 2
myEmitter.on ('newSale', () => {
  console.log ('Customer name: Eliza');
});

// observer 3 stock
myEmitter.on ('newSale', stock => {
  console.log (`there are now ${stock} items left in stock`);
});

//  object that emits the events
// the emit can emit other events and more listeners added
myEmitter.emit ('newSale', 9);

// ==================================================================
// EXAMPLE 2
console.log ('==================');

const server = http.createServer ();

// listen to different events the server emits
// listen 1
server.on ('request', (req, res) => {
  console.log ('Request received');
  res.end ('Request received');
});

// listen 2
server.on ('request', () => {
  res.end ('Server closed ');
});

// start server
server.listen (8000, '127.0.0.1', () => {
  console.log ('Waiting for request.....,');
});
