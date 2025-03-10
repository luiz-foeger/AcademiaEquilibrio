module.exports.dashboard = function (app, req, res) {
    if(req.session.aluno == undefined){
        res.redirect('/login');
    }else{
        const connection = app.config.dbConnection();
        const agendamentoDAO = new app.app.models.AgendamentoDAO(connection);
        agendamentoDAO.getAlunoById(req.session.aluno, function (error, result) {
            agendamentoDAO.getAgendamentosByAlunoId(req.session.aluno, function (error, resultAgedamento) 
            {
                res.render('aluno/dashboard', { aluno: result[0], agendamentos: resultAgedamento, flagAluno: req.session.aluno });
            });
        });
    }
};
module.exports.agendar = function (app, req, res) {
    res.render('aluno/agendar', { flagAluno: req.session.aluno });
}
module.exports.login = function (app, req, res) {
    console.log(req.session.erro);
    res.render('aluno/login', { errors: req.session.erro , flagAluno: req.session.aluno});
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
            req.session.erro= [{msg: 'Login ou senha incorretos'}];
            res.redirect('/login');
            
        }
    });
};
module.exports.authAgendar = function (app, req, res) {
    const dadosForm = req.body;
   dadosForm.id_aluno = req.session.aluno;
    console.log(dadosForm);
    const connection = app.config.dbConnection();
    const agendamentoDAO = new app.app.models.AgendamentoDAO(connection);
    agendamentoDAO.insertAgendamento(dadosForm, function (error, result) {
        res.redirect('/dashboard');
    });

}
module.exports.authLogout = function (app, req, res) {
    req.session.destroy(function (error) {
        res.redirect('/');
    })
}