module.exports = function (app) {
    app.get('/noticia', function (req, res) {
        app.app.controllers.noticia.noticia(app, req, res);
    });
}