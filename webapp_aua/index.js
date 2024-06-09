const express = require('express');
const mustacheExpress = require('mustache-express');
const db = require('./src/db');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./src/routes/estoqueRoutes'));

// Sincronização do banco de dados
db.sync().then(() => {
    console.log('Banco de Dados conectado e sincronizado');
    const fs = require('fs');
    const path = './database.sqlite';
    fs.access(path, fs.constants.F_OK, (err) => {
        console.log(`${path} ${err ? 'não existe' : 'existe'}`);
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('App rodando na porta ' + PORT);
});
