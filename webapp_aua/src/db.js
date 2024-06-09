const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    Storage: './database.sqlite',

    // user: 'admin',
    // password: 'admin'
});

module.exports = sequelize;
