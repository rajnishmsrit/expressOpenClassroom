var express = require('express');
var app = express();
const PORT = process.env.NODE || 3000;

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('pages/index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/basement', function(req, res) {
    res.render('pages/basement');
});

// ...All the route management code (app. get) is above

app.use(function(req, res, next){
    res.status(404).send(res.render('partials/error_404'));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));