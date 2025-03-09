module.exports.noticia = function (app, req, res) {
    const connection = app.config.dbConnection();
    const noticia_id = req.query;
    const noticiasModel = new app.app.models.manchetesDAO(connection);
    noticiasModel.getNoticia(noticia_id, function (error, result) {
        console.log(error)
        res.render("noticia/noticia", { JNoticias: result });
    });
}