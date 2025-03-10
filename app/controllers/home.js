module.exports.home = function (app, req, res) {
    res.render('home/index', { flagAluno: req.session.aluno });
}