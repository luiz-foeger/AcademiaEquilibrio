function AgendamentoDAO(connection) {
    this._connection = connection;
}
AgendamentoDAO.prototype.getLogin = function (dadosForm, callback) {
    this._connection.query('SELECT * FROM alunos WHERE nome = ? AND senha = ?', [dadosForm.nome, dadosForm.senha], callback);
}
AgendamentoDAO.prototype.getAlunoById = function (idAluno, callback) {
    this._connection.query('SELECT * FROM alunos WHERE id = ?', idAluno, callback);
}
AgendamentoDAO.prototype.getAgendamentosByAlunoId = function (idAluno, callback) {
    this._connection.query('SELECT * FROM agendamentos WHERE id_aluno = ?', idAluno, callback);
}
module.exports = function() {
    return AgendamentoDAO;
}