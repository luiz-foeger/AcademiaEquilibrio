const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

const expressValidator = require('express-validator');
const expressSession = require('express-session');
const app = express();

app.set('views','./app/views');
app.set('view engine', 'ejs');
app.use(express.static('./app/public'));

app.use(expressValidator());
app.use(expressSession({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}))

app.use('/auth', require('./routes/authRoutes'));
app.use('/agendamento', require('./routes/scheduleRoutes'));

module.exports = app;