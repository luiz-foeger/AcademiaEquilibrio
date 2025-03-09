const Schedule = require('../models/schedule');

exports.showDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    res.render('dashboard', { user: req.session.user });
};

exports.schedule = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    
    const { aula_id, data } = req.body;
    Schedule.create(req.session.user.id, aula_id, data, (err) => {
        if (err) throw err;
        res.redirect('/dashboard');
    });
};