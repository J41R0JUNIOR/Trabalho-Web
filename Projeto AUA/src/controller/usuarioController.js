const Usuario = require('../model/usuario');
const Animal = require('../model/animais_abrigo'); // Ensure correct model import


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

function indexView(req, res) {
    res.render('index.html');
}

function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios) => {
        res.render("index.html", { usuarios });
    }).catch((err) => {
        res.json(err);
    });
}

function listarAnimaisPorAbrigo(req, res) {
    const usuarioId = req.params.id;
    Animal.findAll({ where: { id_usuario: usuarioId } })
        .then((animais) => {
            res.render('animais.html', { animais: animais }); // Pass animais to animais.html
        })
        .catch((err) => {
            res.json(err);
        });
}

function logarView(req, res, estado){
    res.render('logar.html', { estado });
}

function criarContaView(req, res){
    res.render('usuario_cadastro.html'); 
}

function exibirDetalhesAbrigo(req, res) {
    const id = req.params.id;
    Usuario.findByPk(id).then((usuario) => {
        if (usuario) {
            res.render('abrigo.html', { usuario });
        } else {
            res.status(404).send('Abrigo não encontrado');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
}

module.exports = {
    indexView,
    cadastrarUsuario,
    listarUsuarios,
    logarView,
    criarContaView,
    exibirDetalhesAbrigo,
    listarAnimaisPorAbrigo
};
