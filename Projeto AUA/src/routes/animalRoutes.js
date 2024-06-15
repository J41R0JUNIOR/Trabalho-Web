const express = require('express');
const router = express.Router();

const animalController = require('../controller/animalController');
const autenticacaoController = require('../controller/autenticacaoController');

router.get('/', animalController.indexView);
router.get('/home', autenticacaoController.verificarAutenticacao, animalController.homeView);
router.post('/cadastrar_anotacao', autenticacaoController.verificarAutenticacao, animalController.cadastrarAnotacao);

module.exports = router;