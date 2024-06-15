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
    data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false
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
//     perfil: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// });

// module.exports = Usuario;
