const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/api/usuarios', usuarioController.listarUsuarios);
router.get('/logar_conta', usuarioController.logarView);
router.get('/criar_conta', usuarioController.criarContaView);
router.get('/abrigo/:id', usuarioController.exibirDetalhesAbrigo);
router.get('/abrigo/:id/animais', usuarioController.listarAnimaisPorAbrigo); // New route for listing animals by abrigo

module.exports = router;
