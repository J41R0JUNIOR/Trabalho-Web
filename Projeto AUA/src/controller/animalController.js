const Animal = require('../model/animais_abrigo');

function indexView(req, res) {
    res.render('index.html');
}

function homeView(req, res) {

    Animal.findAll({
        where: {
            id_usuario: req.session.usuario.id,
            indicador_ativo: 1
        }
    }).then((animal)=>{
        res.render('home.html', {animal});
    }).catch((erro_recuperar_animal)=>{
        res.render('home.html', {erro_recuperar_animal});
    })

}

function cadastrarAnimal(req, res) {
    
    let animal = {
        id_usuario: req.session.usuario.id,
        nome: req.body.nome,
        especie: req.body.especie,
        descricao: req.body.descricao
    }

    Animal.create(animal).then(()=>{
        let sucesso = true;
        res.redirect('/home');
    }).catch((err)=>{
        console.log(err);
        let erro_cadastrar_animal = true;
        res.render("home.html", {erro_cadastrar_animal});
    });

}

module.exports = {
    indexView,
    homeView,
    cadastrarAnimal
}