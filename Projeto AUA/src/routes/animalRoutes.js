const express = require('express');
const router = express.Router();

const animalController = require('../controller/animalController');
const autenticacaoController = require('../controller/autenticacaoController');
router.get('/home', autenticacaoController.verificarAutenticacao, animalController.homeView);
router.post('/cadastrar_animal', autenticacaoController.verificarAutenticacao, animalController.cadastrarAnimal);
router.get('/animaisDetalhes/:id_animal', animalController.exibirDetalhesAnimal);
router.post('/remover_animal/:id', autenticacaoController.verificarAutenticacao, animalController.removerAnimal);
router.post('/editar_animal/:id', autenticacaoController.verificarAutenticacao, animalController.editarAnimal);

module.exports = router;
