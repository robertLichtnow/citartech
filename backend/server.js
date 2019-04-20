import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const cors = require('cors');

const config = require('./config');

const paises = require('./routes/pais.route');

const app  = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');

mongoose.connect(config.mongo.uri, config.mongo.options);

console.log(config.mongo.uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

router.route('/').get((req, res) => {
    res.render('index');
});

app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.use(paises);

app.listen(config.port, ()=>{
    console.log(`Running on port ${config.port}`);
})