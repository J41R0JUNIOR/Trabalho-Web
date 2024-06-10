const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController');

//renderizar views
router.get('/', estoqueController.indexView);
router.get('/criar_conta', estoqueController.criarContaView);
router.get('/logar_conta', estoqueController.logarView);

//ação em uma view
router.post('/cadastrar_usuario', estoqueController.cadastrarUsuario);
router.post('/acessar', estoqueController.acessarUsuario);

module.exports = router;
