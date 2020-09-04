// EVENT LOOP SIMULATE
const fs = require ('fs');
const crypto = require ('crypto');

const start = Date.now ();
process.env.UV_THREADPOOL = 3;

setTimeout (() => console.log ('Timer 1 finished'), 0);
setImmediate (() => console.log ('Immediate 1 finished'));

fs.readFile ('test-file.txt', () => {
  console.log ('I/O finished');
  console.log ('===========================');

  setTimeout (() => console.log ('Timer 2 finished'), 0);
  setTimeout (() => console.log ('Timer 3 finished'), 10000);
  setImmediate (() => console.log ('Immediate 2 finished'));

  process.nextTick (() => console.log ('Process.nextTick'));

  // IN THIS CASE THE CRYPTO CODE IS ASYNCHRONOUS COZ CALLBACKS ARE PASSED IN
  crypto.pbkdf2 ('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log (
      `Password 1 encrypted finished in ${Date.now () - start} milliSeconds`
    );
  });

  crypto.pbkdf2 ('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log (
      `Password 2 encrypted finished in ${Date.now () - start} milliSeconds`
    );
  });

  crypto.pbkdf2 ('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log (
      `Password 3 encrypted finished in ${Date.now () - start} milliSeconds`
    );
  });

  crypto.pbkdf2 ('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log (
      `Password 4 encrypted finished in ${Date.now () - start} milliSeconds`
    );
  });
});

console.log ('Hello from top level code');
