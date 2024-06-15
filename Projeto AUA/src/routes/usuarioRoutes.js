const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuarioController');

router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/api/usuarios', usuarioController.listarUsuarios);

module.exports = router;


// nosso usuario routes

// const express = require('express');
// const router = express.Router();
// const Usuario = require('../models/usuario');

// const estoqueController = require('../controllers/estoqueController');

// router.get('/', async (req, res) => {
//     try {
//         const usuarios = await Usuario.findAll();
//         res.render('index', { usuarios });
//     } catch (error) {
//         res.status(500).send('Erro ao recuperar usuários: ' + error);
//     }
// });
 
// module.exports = router;




// nosso estoque routes

// const express = require('express');
// const router = express.Router();

// const estoqueController = require('../controllers/estoqueController');

// //renderizar views
// router.get('/', estoqueController.indexView);
// router.get('/criar_conta', estoqueController.criarContaView); 
// router.get('/logar_conta', estoqueController.logarView);
// router.get('/animais', estoqueController.animaisView);

// //ação em uma view
// router.post('/cadastrar', estoqueController.cadastrarUsuario);
// router.post('/acessar', estoqueController.acessarUsuario);

// module.exports = router;
