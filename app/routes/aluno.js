module.exports = function(app, req, res){
    app.get('/dashboard', function(req, res){
        app.app.controllers.aluno.dashboard(app, req, res);
    });
    app.get('/login', function(req, res){
        app.app.controllers.aluno.login(app, req, res);
    });
    app.post('/auth/login', function(req, res){
        app.app.controllers.aluno.authLogin(app, req, res);
    });
    app.get('/auth/logout', function(req, res){
        app.app.controllers.aluno.authLogout(app, req, res);
    });
}