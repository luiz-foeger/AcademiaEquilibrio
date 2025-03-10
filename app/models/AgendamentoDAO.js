function AgendamentoDAO(connection) {
    this._connection = connection;
}
AgendamentoDAO.prototype.getAgendamentos = function(callback) {
    this._connection.query('select * from agendamentos', callback);
}
AgendamentoDAO.prototype.getAlunos = function(callback) {
    this._connection.query('select * from alunos', callback);
}
module.exports = function() {
    return AgendamentoDAO;
}