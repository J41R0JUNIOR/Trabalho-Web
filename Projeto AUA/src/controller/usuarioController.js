const Usuario = require('../model/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        cep: req.body.cep,
        numero: req.body.numero, 
        complemento: req.body.complemento,
        cnpj: req.body.cnpj
    };

    Usuario.create(usuario).then(() => {
        // res.render('usuario_cadastro.html', { sucesso: true });
        sucesso = true
        listarUsuarios(req, res, sucesso);
    }).catch((err) => {
        console.log(err);
        res.render('usuario_cadastro.html', { erro: true });
    });
}

function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios) => {
        res.render("index.html", { usuarios });
    }).catch((err) => {
        res.json(err);
    });
}

function logarView(req, res, estado){
    res.render('logar.html', { estado });
}

function criarContaView(req, res){
    res.render('usuario_cadastro.html'); 
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios,
    logarView,
    criarContaView
};
