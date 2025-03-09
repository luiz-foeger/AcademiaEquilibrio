const db = require('../config/database');

class User {
    static findByEmail(email, callback) {
        db.query('SELECT * FROM usuarios WHERE email = ?', [email], callback);
    }
}

module.exports = User;