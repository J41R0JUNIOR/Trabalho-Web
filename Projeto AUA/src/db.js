const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = sequelize;

// nosso codigo

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './database.sqlite'  // Caminho correto e 'storage' em minúsculas
// });

// module.exports = sequelize;
