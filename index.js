const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end(indexFile);
      break;
    case "/index.html":
      res.statusCode = 200;
      res.end(indexFile);
      break;
    case "/about.html":
      res.statusCode = 200;
      res.end(aboutFile);
      break;
    case "/contact.html":
      res.statusCode = 200;
      res.end(contactFile);
      break;
    default:
      console.log(req.url);
      res.statusCode = 404;
      res.end(errFile);
  }
});

let indexFile;
fs.readFile(__dirname + '/index.html')
  .then(contents => {
    indexFile = contents;
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

let aboutFile;
fs.readFile(__dirname + '/about.html')
  .then(contents => {
    aboutFile = contents;
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

let contactFile;
fs.readFile(__dirname + '/contact.html')
  .then(contents => {
    contactFile = contents;
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

let errFile;
fs.readFile(__dirname + '/404.html')
  .then(contents => {
    errFile = contents;
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});
  
  Promise.all([indexFile, aboutFile, contactFile, errFile]).then(() => {
    server.listen(port, host, () => { console.log('server running') });    
  })
  