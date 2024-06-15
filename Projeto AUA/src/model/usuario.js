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
    numeroAbrigo: {
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



// nosso codigo 

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const Usuario = sequelize.define('Usuario', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     senha: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
    // perfil: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
// });

// module.exports = Usuario;
