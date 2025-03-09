const db = require('../config/database');

class Agenda {
    static create(usuario_id, aula_id, data, callback) {
        db.query('INSERT INTO agendamentos (usuario_id, aula_id, data) VALUES (?, ?, ?)', [usuario_id, aula_id, data], callback);
    }
}

module.exports = Agenda;