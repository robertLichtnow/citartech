const mongoose = require('mongoose')

//Para utilização do ES6
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/citartech_test', {useNewUrlParser: true })
mongoose.connection
    .once('open', () => console.log('Connected to mongodb'))
    .on('error', (err) => {
        console.warn('Error : ', err);
    }); 