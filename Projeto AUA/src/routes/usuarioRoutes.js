const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/api/usuarios', usuarioController.listarUsuarios);
router.get('/logar_conta', usuarioController.logarView);
router.get('/criar_conta', usuarioController.criarContaView);
router.get('/abrigo/:id', usuarioController.exibirDetalhesAbrigo);
router.get('/abrigo/:id/animais', usuarioController.listarAnimaisPorAbrigo); 
router.post('/remover_usuario/:usuario', usuarioController.removerUsuario);
router.post('/editar_usuario/:id', usuarioController.editarUsuario);

module.exports = router;
