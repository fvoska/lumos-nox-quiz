// server.js
const express = require('express');
const app = express();
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

const useAuth = false;

if (useAuth) {
  const basicAuth = require('express-basic-auth');
  
  app.use(basicAuth({
    users: {lumosnox: 'sherbetlemon'},
    challenge: true,
    realm: 'LumosNoxFireflyQuiz'
  }));
}

// Fix path
const path = require('path');
const splitPath = __dirname.split('/');
splitPath.pop();
splitPath.pop();
const fixedPath = splitPath.join('/');

// Serve client files.
app.use(express.static(fixedPath + '/dist/client'));

// For refreshing.
app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(fixedPath + '/dist/client/index.html');
});

app.listen(process.env.PORT || 8080);
