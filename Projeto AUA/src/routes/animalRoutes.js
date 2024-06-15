const express = require('express');
const router = express.Router();

const animalController = require('../controller/animalController');
const autenticacaoController = require('../controller/autenticacaoController');

router.get('/', animalController.indexView);
router.get('/home', autenticacaoController.verificarAutenticacao, animalController.homeView);
router.post('/cadastrar_animal', autenticacaoController.verificarAutenticacao, animalController.cadastrarAnimal);

module.exports = router;