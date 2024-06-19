const Sequelize = require('sequelize');
const database = require('../db');
const Usuario = require('./usuario'); // Importe o modelo de Usuario

const Animal = database.define('animal', {
    id_animal: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        },
        onDelete: 'CASCADE' // Isso garante que ao excluir um usuário, todos os animais associados a ele também serão excluídos
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
});

module.exports = Animal;
