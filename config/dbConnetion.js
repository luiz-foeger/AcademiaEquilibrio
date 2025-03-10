const mysql = require('mysql');
const connMYSQL = function(){
    console.log('Conexão com o banco de dados estabelecida!');
    return mysql.createConnection({
        host :'localhost',
        user : 'root',
        password : '',
        database : 'academiaEquilibrio'
    })
}
module.exports = function(){
    return connMYSQL;
}