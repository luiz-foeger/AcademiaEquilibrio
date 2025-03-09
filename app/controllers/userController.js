const User = require('../models/user');

exports.showLogin = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { email, senha } = req.body;
    User.findByEmail(email, (err, results) => {
        if (err) throw err;
        if (results.length > 0 && results[0].senha === senha) {
            req.session.user = results[0];
            res.redirect('/dashboard');
        } else {
            res.render('login', { error: 'Usuário ou senha incorretos!' });
        }
    });
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};