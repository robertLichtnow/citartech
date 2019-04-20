import express from 'express';
import mongoose from 'mongoose';

/**
 * Bloco para obtençãon de rotas e utilitários para o express
 */
const cors = require('cors');
const config = require('./config');
const index = require('./routes/index.route');
const paises = require('./routes/pais.route');

/**
 * Instância do express
 */
const app  = express();

/**
 * Configuração do express com cors e ejs
 */
app.use(cors());
app.set('view engine', 'ejs');

/**
 * Instanciando conexão com mongodb
 */
mongoose.connect(config.mongo.uri, config.mongo.options);
console.log(config.mongo.uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

/**
 * Liberando acesso a arquivos estáticos (scripts de página e css)
 */
app.use(express.static(__dirname + '/public'));

/**
 * Criando rotas para index e países
 */
app.use(index);
app.use(paises);

/**
 * Iniciando a aplicação
 */
app.listen(config.port, ()=>{
    console.log(`Running on port ${config.port}`);
})