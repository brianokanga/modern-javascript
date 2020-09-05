const fs = require ('fs');
const server = require ('http').createServer ();

server.on ('request', (req, res) => {
  //solution 1
  //   fs.readFile ('test-file.txt', (err, data) => {
  //     if (err) console.log (err);
  //     res.end (data);
  //   });

  //solution 2: Streams -BACK PRESSURE
  //   const readable = fs.createReadStream ('tessst-file.txt');
  //   readable.on ('data', chunk => {
  //     res.write (chunk);
  //     readable.on ('end', () => {
  //       res.end ();
  //     });
  //   });
  //   readable.on ('error', err => {
  //     console.log (err);
  //     res.statusCode = 500;
  //     res.end ('Fole not found');
  //   });

  //solution 3: Streams  using PIPE
  const readable = fs.createReadStream ('tessst-file.txt');
  //   readableSource.pipe (writableDestination);
  readable.pipe (res);
});

server.listen (8000, '127.0.0.1', () => {
  console.log ('listening....');
});
