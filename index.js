var express = require('express');
var app = express();
var morgan = require('morgan'); // loads the piece of middleware for logging
var favicon = require('serve-favicon'); // loads the piece of middleware for the favicon

const PORT = process.env.NODE || 3000;

app.use(morgan('combined')) // loads the piece of middleware for logging
.use(express.static(__dirname + '/public')) // Specifies that the /public folder includes static files (basic piece of middleware loaded)
.use(favicon(__dirname + '/public/favicon.ico')) // Activates the favicon specified
.use(function(req, res){ // finally answers
    res.send('Hello');
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in reception. How can I help you?');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/:floornum/bedroom', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
});

app.get('/count/:number', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.number, names: names});
});

// ...All the route management code (app. get) is above

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page cannot be found!');
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`))