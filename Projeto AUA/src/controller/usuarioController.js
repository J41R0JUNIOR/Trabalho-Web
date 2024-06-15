const Usuario = require('../model/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        cep: req.body.cep,
        numeroAbrigo: req.body.numeroAbrigo,
        complemento: req.body.complemento,
        cnpj: req.body.cnpj
    };

    Usuario.create(usuario).then(() => {
        let sucesso = true;
        res.render("index.html", { sucesso });
    }).catch((err) => {
        console.log(err);
        let erro = true;
        res.render("index.html", { erro });
    });
}

function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios) => {
        res.render("index.html", { usuarios });
    }).catch((err) => {
        res.json(err);
    });
}

function logarView(req, res){
    res.render('logar.html');
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
