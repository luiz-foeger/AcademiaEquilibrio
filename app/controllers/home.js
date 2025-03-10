module.exports.home = function(app, req, res){
    const connection = app.config.dbConnection();
    const agendamentoDAO = new app.app.models.AgendamentoDAO(connection);
    agendamentoDAO.getAgendamentos(function(error, result){
        console.log(result);
        res.render('home/index');
    });
 
}