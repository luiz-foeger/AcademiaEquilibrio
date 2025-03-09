module.exports = {
    form_add_noticia: function (app, req, res) {
        if (req.session.autorizado) {
            res.render("admin/form_add_noticia", { validacao: {}, noticia: {}, flagAdmin: req.session.flagAdmin || false });
        } else {
            var erro = [];
            erro.push({ msg: "Usuário não Autorizado" });
            res.render("admin/form_login", { validacao: erro });
        }
    },

    form_login: function (app, req, res) {
        res.render("admin/form_login", { validacao: {}, flagAdmin: req.session.flagAdmin || false });
    },

    sair: function (app, req, res) {
        req.session.destroy(function(error){ 
            res.redirect("/");
        });
    },

    noticia_salvar: function (app, req, res) {
        const noticia = req.body;

        req.assert('titulo', 'O título é obrigatório').notEmpty();
        req.assert('resumo', 'O Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'O Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
        req.assert('autor', 'O Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'A Data é obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' });
        req.assert('texto', 'A notícia é obrigatória').notEmpty();

        const erros = req.validationErrors();

        if (erros) {
            res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
            return;
        }

        const connection = app.config.dbConnection();
        const salvarNoticiaModel = new app.app.models.manchetesDAO(connection);

        salvarNoticiaModel.salvarNoticia(noticia, function (error, result) {
            if (error) {
                console.error("Erro ao salvar notícia:", error);
                res.render("admin/form_add_noticia", { validacao: [{ msg: "Erro ao salvar notícia" }], noticia: noticia });
                return;
            }
            res.redirect("/todas_noticias");
        });
    },

    login_autenticar: function (app, req, res) {
        var camposDeUsuario = req.body;

        req.assert('usuario', 'O Usuário é obrigatório').notEmpty();
        req.assert('senha', 'A Senha é obrigatória').notEmpty();
        var erros = req.validationErrors();
        if (erros) {
            res.render("admin/form_login", { validacao: erros });
            return;
        }

        const connection = app.config.dbConnection();
        const autenticacao = new app.app.models.manchetesDAO(connection);

        autenticacao.getLogin(camposDeUsuario, function (error, result) {
            if (error) {
                console.error("Erro na autenticação:", error);
                res.render("admin/form_login", { validacao: [{ msg: "Erro na autenticação" }] });
                return;
            }

            // Certifica-se de que result é um array
            if (!result || !Array.isArray(result) || result.length === 0) {
                var erro = [];
                erro.push({ msg: "Usuário ou Senha Inválidos" });
                res.render("admin/form_login", { validacao: erro });
                return;
            }

            req.session.autorizado = true;
            req.session.flagAdmin = result[0].admin || false; // Se o usuário tiver um campo 'admin', armazene na sessão
            res.redirect("/");
        });
    }
};


// module.exports.form_add_noticia = function (app, req, res) {
//     res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
// }
// module.exports.form_login = function (app, req, res) {
//     res.render("admin/form_login", { validacao: {} });
// }
// module.exports.noticia_salvar = function (app, req, res) {
//     const noticia = req.body;
//     req.assert('titulo', 'O título é obrigatório').notEmpty();
//     req.assert('resumo', 'O Resumo é obrigatório').notEmpty();
//     req.assert('resumo', 'O Resumo deve de contar entre 10 a 100 caracteres').len(10, 100);
//     req.assert('autor', 'O Autor é obrigatório').notEmpty();
//     req.assert('data_noticia', 'A Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });
//     req.assert('texto', 'A notícia é obrigatório').notEmpty();
//     const erros = req.validationErrors();
//     if (erros) {
//         res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia })
//         return;
//     }
//     const connection = app.config.dbConnection();
//     const salvarNoticiaModel = new app.app.models.manchetesDAO(connection);
//     salvarNoticiaModel.salvarNoticia(noticia, function (error, result) {
//         res.redirect("/todas_noticias")
//     });
// }
// module.exports.login_autenticar = function (app, req, res) {
//     var camposDeUsuario = req.body;
//     req.assert('usuario', 'O Usuário é obrigatório').notEmpty();
//     req.assert('senha', 'A Senha é obrigatório').notEmpty();
//     var erros = req.validationErrors();
//     if (erros) {
//         res.render("admin/form_login", { validacao: erros });
//         return;
//     }
// }
// var connection = app.config.dbConnection();
// var autenticacao = new app.app.models.manchetesDAO(connection);
// autenticacao.getLogin(camposDeUsuario, function(error, result) {
//     if (result.length == 0) {
//         var erro = [];
//         erro.push({ msg: "Usuário ou Senha Inválidos" });
//         res.render("admin/form_login", { validacao: erro });
//         return;
//     }
//     console.log('chegou aqui!');
// });

