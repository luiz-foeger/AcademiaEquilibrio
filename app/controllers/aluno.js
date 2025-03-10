module.exports.dashboard = function (app, req, res) {
    if(req.session.aluno == undefined){
        res.redirect('/login');
    }else{
        const connection = app.config.dbConnection();
        const agendamentoDAO = new app.app.models.AgendamentoDAO(connection);
        agendamentoDAO.getAlunoById(req.session.aluno, function (error, result) {
            agendamentoDAO.getAgendamentosByAlunoId(req.session.aluno, function (error, resultAgedamento) 
            {
                console.log(resultAgedamento);
                res.render('aluno/dashboard', { aluno: result[0], agendamentos: resultAgedamento, flagAluno: req.session.aluno });
            });
        });
    }
};

module.exports.login = function (app, req, res) {
    res.render('aluno/login', { errors: {} , flagAluno: req.session.aluno});
};

module.exports.authLogin = function (app, req, res) {
    //console.log(req.body);
    const dadosForm = req.body;
    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();
    //const errors = req.validationErrors();

    const connection = app.config.dbConnection();
    const agendamentoDAO = new app.app.models.AgendamentoDAO(connection);
    agendamentoDAO.getLogin(dadosForm, function (error, result) {
        //console.log(result);
        if (result.length > 0) {
           // console.log('Login efetuado com sucesso');
            req.session.aluno = result[0].id;
            res.redirect('/dashboard');
        } else {
            //console.log('Login ou senha incorretos');
            res.render('aluno/login', { errors: [{msg: 'Nome ou senha incorretos'}], flagAluno: req.session.aluno });
            
        }
    });
};
module.exports.authLogout = function (app, req, res) {
    req.session.destroy(function (error) {
        res.redirect('/');
    })
}