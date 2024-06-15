const Sequelize = require('sequelize');
const database = require('../db');

const Anotacao = database.define('animal', {
    id_animal: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
    // titulo: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // subtitulo: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // texto: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // estilo: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // indicador_ativo: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // }
    
});

module.exports = Anotacao;