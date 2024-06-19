const Animal = require('../model/animais_abrigo');



async function homeView(req, res) {
    if (!req.session.usuario || !req.session.usuario.id) {
        return res.redirect('/');
    }

    try {
        const animais = await Animal.findAll({
            where: {
                id_usuario: req.session.usuario.id
            }
        });
        console.log(animais);
        res.render('home.html', { animais: animais });
    } catch (error) {
        console.error('Erro ao recuperar animais:', error);
        res.render('home.html', { erro_recuperar_animal: true });
    }
}

function listarAnimais(req, res) {
    const usuarioId = req.params.id;
    Animal.findAll({ where: { id_usuario: usuarioId } })
        .then((animais) => {
            res.render('animais.html', { animais });
        })
        .catch((err) => {
            res.json(err);
        });
}

function cadastrarAnimal(req, res) {
    if (!req.session.usuario || !req.session.usuario.id) {
        return res.redirect('/');
    }

    let animal = {
        id_usuario: req.session.usuario.id,
        nome: req.body.nome,
        especie: req.body.especie,
        descricao: req.body.descricao
    };

    Animal.create(animal)
        .then(() => {
            res.redirect('/home');
        })
        .catch((err) => {
            console.error('Erro ao cadastrar animal:', err);
            res.render("home.html", { erro_cadastrar_animal: true });
        });
}

async function viewAnimal(req, res) {
    const animalId = req.params.id;
    
    try {
        const animal = await Animal.findOne({ where: { id: animalId } });
        if (!animal) {
            return res.status(404).render('error.html', { message: 'Animal não encontrado' });
        }
        res.render('animaisDetalhes.html', { animal: animal });
       
    } catch (error) {
        console.error('Erro ao recuperar animal:', error);
        res.status(500).render('error.html', { message: 'Erro ao recuperar animal' });
    }
}



module.exports = {
    homeView,
    cadastrarAnimal,
    listarAnimais,
 
};
