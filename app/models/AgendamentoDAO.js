function AgendamentoDAO(connection) {
    this._connection = connection;
}
AgendamentoDAO.prototype.getLogin = function (dadosForm, callback) {
    this._connection.query('SELECT * FROM alunos WHERE nome = ? AND senha = ?', [dadosForm.nome, dadosForm.senha], callback);
}
module.exports = function() {
    return AgendamentoDAO;
}