const Usuario = require('../model/usuario');

function indexView(req, res){
    res.render('index.html');
}

function criarContaView(req, res){
    res.render('usuario_cadastro.html');
}

function cadastrarUsuario(req, res){
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        perfil: req.body.perfil
    }

    Usuario.create(usuario).then(() => {
        res.redirect('/?cadastrar_usuario=true');
    }).catch((err) => {
        console.log(err);
        res.redirect('/?cadastrar_usuario=false');
    });
}

function acessarUsuario(req, res) {
    const { email, senha } = req.body;
    
    Usuario.findOne({ where: { email: email } }).then(usuario => {
        if (usuario && usuario.senha === senha) {
            res.send('Login realizado com sucesso!');
        } else {
            res.status(401).send('Credenciais inválidas');
        }
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro no servidor');
    });
}

module.exports = {
    indexView, 
    criarContaView, 
    cadastrarUsuario,
    acessarUsuario
}
