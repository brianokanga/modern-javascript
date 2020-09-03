const http = require ('http');
const url = require ('url');

//SERVER
const server = http.createServer ((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end ('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end ('This is the RODUCT');
  } else {
    res.writeHead (404);
    res.end ('This is the RODUCT');
  }
});

// listening to server
server.listen (8000, '127.0.0.1', () => {
  console.log ('Listening to requests on port 8000');
});
