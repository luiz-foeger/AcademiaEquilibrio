module.exports = function(app, req, res){
    app.get('/dashboard', function(req, res){
        if(req.session.aluno !== undefined){
            app.app.controllers.aluno.dashboard(app, req, res);
        }
        else{
            res.redirect('/login');
        }
        app.app.controllers.aluno.dashboard(app, req, res);
    });
    app.get('/login', function(req, res){
        app.app.controllers.aluno.login(app, req, res);
    });
    app.post('/auth', function(req, res){
        app.app.controllers.aluno.authLogin(app, req, res);
    });
}