const fs = require ('fs');
const http = require ('http');
const url = require ('url');

//SERVER
// TOP LEVEL CODE
// syncronous code can work sincee top level code is only called once at the beginning
const replaceTemplate = (temp, product) => {
  let output = temp.replace (/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace (/{%IMAGE%}/g, product.image);
  output = output.replace (/{%PRICE%}/g, product.price);
  output = output.replace (/{%FROM%}/g, product.from);
  output = output.replace (/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace (/{%QUANTITY%}/g, product.quantity);
  output = output.replace (/{%DESCRIPTION%}/g, product.description);
  output = output.replace (/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace (/{%NOT_ORGANIC%}/g, 'not_organic');
  return output; //final modified markup
};

// Server
const tempOverview = fs.readFileSync (
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync (
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync (
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const data = fs.readFileSync (`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse (data);

// no syncronous code here. its calle every time there is a request
const server = http.createServer ((req, res) => {
  const {query, pathname} = url.parse (req.url, true);

  // Overview
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead (200, {'Content-type': 'text/html'});
    const cardHtml = dataObj.map (el => replaceTemplate (tempCard, el));
    const output = tempOverview.replace ('{%PRODUCT-CARDS%}', cardHtml);
    res.end (output);

    //  Product
  } else if (pathname === '/product') {
    res.writeHead (200, {'Content-type': 'text/html'});
    const product = dataObj[query.id];
    const output = replaceTemplate (tempProduct, product);
    res.end (output);

    // API
  } else if (pathname === '/api') {
    res.writeHead (200, {'Content-type': 'application/json'});
    res.end (data);

    // Not found
  } else {
    res.writeHead (404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
  }
});

// listening to server
server.listen (8000, '127.0.0.1', () => {
  console.log ('Listening to requests on port 8000');
});
