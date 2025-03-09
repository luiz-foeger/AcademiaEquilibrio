const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
// const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', './app/views/');

// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/auth', require('/routes/authRoutes'));
// app.use('/schedule', require('/routes/scheduleRoutes'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});