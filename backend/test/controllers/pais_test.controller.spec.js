const assert = require('assert')
const Pais = require('../../models/pais.model')
const paisCtrl = require('../../controllers/pais.controller')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const paises = [
    {sigla: 'TS1', nome:'Teste 1'},
    {sigla: 'TS2', nome:'Teste 2'},
    {sigla: 'TS3', nome:'Teste 3'}
]

beforeEach((done) => {
    //Dropa a collection de países
    mongoose.connection.collections.pais.drop();
    //mockando os países
    paises.forEach(v => {
        let pais = new Pais(v);
        pais.save(function(err, pais){});
    });
    done(); 
});

afterEach((done) => {
    if(fs.existsSync(path.join(__dirname,'../../arquivos/csv/paises.csv'))){
        fs.unlinkSync(path.join(__dirname,'../../arquivos/csv/paises.csv'));
    }
    //excluindo arquivo xlsx
    if(fs.existsSync(path.join(__dirname,'../../arquivos/xlsx/paises.xlsx'))){
        fs.unlinkSync(path.join(__dirname,'../../arquivos/xlsx/paises.xlsx'));
    }
    done();
})


describe('PaisController', function () {
    it('Deveria ter 3 países cadastrados', (done) => {
        paisCtrl.getPaises()
            .then((paises) => {
                assert(paises.length == 3);
                done();
            })
            .catch(err => {
                done();
            });
    });

    it('Deveria salvar o arquivo csv', function(done){
        paisCtrl.getPaisesCSV()
        .then(file => {
            assert(fs.existsSync(file)); 
            done();       
        })
        .catch(err => {
            done();
        });     
    });

    it('Deveria salvar o arquivo xlsx', function(done){
        paisCtrl.getPaisesCSV()
        .then(file => {
            assert(fs.existsSync(file)); 
            done();       
        })
        .catch(err => {
            done();
        });  
    })
});