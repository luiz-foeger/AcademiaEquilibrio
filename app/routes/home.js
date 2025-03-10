module.exports = function (app) {
    app.get('/', function (req, res) {
        console.log(req.session.aluno);
        app.app.controllers.home.home(app, req, res);
    });
};