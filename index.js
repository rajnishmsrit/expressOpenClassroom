var express = require('express');
var app = express();

const PORT = process.env.NODE || 3000;

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in reception. How can I help you?');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the wine cellar. Those bottles are mine!');
});

// ...All the route management code (app. get) is above

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page cannot be found!');
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`))