import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Pais from './models/pais';

const app  = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/citartech');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/', router)

router.route('/').get((req,res) => {
    res.send('teste');
})

app.listen(4000, ()=>{
    console.log('Running on port 4000');
})