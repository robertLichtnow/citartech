const Pais = require('../models/pais.model');
const fs = require('fs');
const json2csv = require('json2csv').parse;
const json2xls = require('json2xls');
const path = require('path')

module.exports = {
    getPaises,
    getPaisesCSV,
    getPaisesXLSX
}

/**
 * Serviço que retorna os paises cadastrados no banco ordendos de forma descendente no nome
 */
async function getPaises() {
    return await Pais.find({}).sort({ 'nome': -1 });
}

/**
 * Serviço que cria um novo CSV dos paises cadastrados e retorna o caminho do arquivo salvo
 */
async function getPaisesCSV() {
    const paises = await Pais.find({}).sort({ 'nome': -1 });

    const fields = ['sigla', 'nome', 'nomeCompleto'];
    const opts = {fields: fields, header: true, quote: ''};
    const path = path.join(__dirname, '/../arquivos/csv/paises.csv');
    try{
        const csv = json2csv(paises, opts);
        fs.writeFileSync(path,csv);
    }
    catch(e){
        //catch apenas para o throw não ir para a frente, pois o path vai se manter
        //este fluxo já cuida de sempre devolver uma versão do csv, mesmo que ocorra erro
    } 
    return path;
}

/**
 * Serviço que cria um novo XLSX dos paises cadastrados e retorna o caminho do arquivo salvo
 */
async function getPaisesXLSX(){
    const paises = await Pais.find({}).sort({ 'nome': -1 });

    const fields = ['sigla', 'nome', 'nomeCompleto'];
    const opts = {fields:fields}
    const path = path.join(__dirname, '/../arquivos/xlsx/paises.xlsx');
    try{
        const xlsx = json2xls(paises,opts);
        fs.writeFileSync(path,xlsx,'binary');
    }
    catch(e){
        console.log(e);
        //catch apenas para o throw não ir para a frente, pois o path vai se manter
        //este fluxo já cuida de sempre devolver uma versão do xlsx, mesmo que ocorra erro
    }
    return path;
}