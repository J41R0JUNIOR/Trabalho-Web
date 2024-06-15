const Sequelize = require('sequelize');
const database = require('../db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false 
    },
    numero: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false 
    },
    complemento: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    },
    cnpj: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
    }
 
});

module.exports = Usuario;


