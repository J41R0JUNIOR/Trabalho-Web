

const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuarioController');


router.get('/', usuarioController.listarUsuarios);

router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/api/usuarios', usuarioController.listarUsuarios);

router.get('/logar_conta', usuarioController.logarView);
router.get('/criar_conta', usuarioController.criarContaView); 

module.exports = router;