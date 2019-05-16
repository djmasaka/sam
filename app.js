var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//set static files
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.get(['/', '/homepage.html'], function(req, res){
    res.render('home');
})
app.get('/contacts.html', function(req, res){
    res.render('contacts');
})
app.get('/projects.html', function(req, res){
    res.render('projects');
})
app.get('/questions.html', function(req, res){
    res.render('questdfions');
})
app.get('/:id', function(req, res){
    res.render('404');
    
})

app.listen(3000, function(){
    console.log('Server started on port 3000...');
})
