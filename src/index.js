const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

// Log request to server
var morgan = require('morgan');

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Set src view static
app.set('views', path.join(__dirname, 'resources/views'));

//Router
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.get('/search', (req, res) => {
    // http://localhost:8000/search?q=mintran&ref=aing&author=thuy
    console.log(req.query.q);
    res.render('search');
})


app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`))