module.exports = function (app) {
    app.get('/admin', function (req, res) {
        app.app.controllers.admin.form_add_noticia(app, req, res);
    });

    app.post('/noticias/salvar', function (req, res) {
        app.app.controllers.admin.noticia_salvar(app, req, res);
    });

    app.post('/autenticar', function (req, res) {
        app.app.controllers.admin.login_autenticar(app, req, res);
    });

    app.get('/login', function (req, res) {
        app.app.controllers.admin.form_login(app, req, res);
    });

    app.get('/sair', function (req, res) {
        app.app.controllers.admin.sair(app, req, res);
    });
}

