function NoticiasDAO(connection){
    this._connection = connection;
}
NoticiasDAO.prototype.getNoticia = function(noticia_id,callback){
    this._connection.query(`SELECT * FROM manchetes WHERE id = `+noticia_id.noticia_id,callback);
}
NoticiasDAO.prototype.getTodasNoticias = function(callback){
    this._connection.query('SELECT * FROM manchetes',callback);
}
NoticiasDAO.prototype.getHome = function(callback){
    this._connection.query('SELECT * FROM manchetes ORDER BY data_noticia DESC LIMIT 5',callback);
}
NoticiasDAO.prototype.getLogin = function(camposDeUsuario, callback){
    this._connection.query('SELECT id FROM usuarios WHERE = "' + camposDeUsuario.usuario + '" AND senha = ' + camposDeUsuario.senha, callback);
}
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO manchetes SET ?',noticia, callback);
}
module.exports = function(){
    return NoticiasDAO;
}