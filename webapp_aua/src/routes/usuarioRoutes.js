const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

const estoqueController = require('../controllers/estoqueController');

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.render('index', { usuarios });
    } catch (error) {
        res.status(500).send('Erro ao recuperar usuários: ' + error);
    }
});
 
module.exports = router;
