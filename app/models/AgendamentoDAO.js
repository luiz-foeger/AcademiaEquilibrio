function AgendamentoDAO(connection) {
    this._connection = connection;
}
AgendamentoDAO.prototype.getLogin = function (dadosForm, callback) {
    this._connection.query('SELECT * FROM alunos WHERE nome = ? AND senha = ?', [dadosForm.nome, dadosForm.senha], callback);
}
AgendamentoDAO.prototype.getAlunoById = function (idAluno, callback) {
    this._connection.query('SELECT * FROM alunos WHERE id = ?', idAluno, callback);
}
AgendamentoDAO.prototype.getAgendamentoById = function (idAgendamento, callback) {
    this._connection.query('SELECT * FROM agendamentos WHERE id = ?', idAgendamento, callback);
}
AgendamentoDAO.prototype.getAgendamentosByAlunoId = function (idAluno, callback) {
    this._connection.query('SELECT * FROM agendamentos WHERE id_aluno = ?', idAluno, callback);
}
AgendamentoDAO.prototype.insertAgendamento = function (agendamento, callback) {
    this._connection.query('INSERT INTO agendamentos SET ?', agendamento, callback);
}
AgendamentoDAO.prototype.deleteAgendamento = function (idAgendamento, callback) {
    this._connection.query('DELETE FROM agendamentos WHERE id = ?', idAgendamento, callback);
}
AgendamentoDAO.prototype.editAgendamento = function (agendamento, callback) {
    this._connection.query('UPDATE agendamentos SET ? WHERE id = ?', [agendamento, agendamento.id], callback);
}
module.exports = function() {
    return AgendamentoDAO;
}