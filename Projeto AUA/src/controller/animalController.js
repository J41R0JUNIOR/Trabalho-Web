const Animal = require('../model/animais_abrigo');
const Usuario = require('../model/usuario');


async function homeView(req, res) {
    if (!req.session.usuario || !req.session.usuario.id) {
        return res.redirect('/');
    }

    const usuario = await Usuario.findOne({
        where: {
            id: req.session.usuario.id
        }
    });

    try {
        const animais = await Animal.findAll({
            where: {
                id_usuario: req.session.usuario.id
            }
        });
        console.log(animais);
        res.render('home.html', { animais: animais, usuario: usuario});
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

function exibirDetalhesAnimal(req, res){
    const id = req.params.id_animal;
    Animal.findByPk(id).then((animal) => {
        if (animal) {
            res.render('animaisDetalhes.html', {animal});
        }else {
            res.status(404).send('Animal não encontrado');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
}

async function removerAnimal(req, res) {
    if (!req.session.usuario || !req.session.usuario.id) {
        return res.redirect('/');
    }

    const animalId = req.params.id;

    try {
        const deleted = await Animal.destroy({
            where: {
                id_animal: animalId,
                id_usuario: req.session.usuario.id
            }
        });

        if (deleted) {
            res.redirect('/home');
        } else {
            res.render('home.html', { erro_remover_animal: true });
        }
    } catch (error) {
        console.error('Erro ao remover animal:', error);
        res.render('home.html', { erro_remover_animal: true });
    }
}

async function editarAnimal(req, res) {
    if (!req.session.usuario || !req.session.usuario.id) {
        return res.redirect('/');
    }

    const animalId = req.params.id;
    const { nome, especie, descricao } = req.body;

    try {
        const [updated] = await Animal.update(
            { nome, especie, descricao },
            { where: { id_animal: animalId, id_usuario: req.session.usuario.id } }
        );

        if (updated) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Erro ao editar animal:', error);
        res.json({ success: false });
    }
}



module.exports = {
    homeView,
    cadastrarAnimal,
    listarAnimais,
    exibirDetalhesAnimal,
    removerAnimal,
    editarAnimal
};
