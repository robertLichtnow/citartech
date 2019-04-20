const express = require('express')
const asyncHandler = require('express-async-handler')
const paisCtrl = require('../controllers/pais.controller');

const router = express.Router();

router.route('/pais').get(asyncHandler(getPaises));

/**
 * Chamada para método de controller para obtenção de países
 * 
 * @param {*} req objeto de request da chamada http
 * @param {*} res objeto de response da chamada http
 */
async function getPaises(req, res){
    let paises = await paisCtrl.getPaises();
    res.render('pais/paises',{paises:paises})
}

router.route('/api/pais/csv').get(asyncHandler(getPaisesCSV));

/**
 * Chamada para método de controller para geração síncrona de arquivo CSV
 * dos países
 * 
 * @param {*} req objeto de request da chamada http
 * @param {*} res objeto de response da chamada http
 */
async function getPaisesCSV(req, res){
    let file = await paisCtrl.getPaisesCSV();
    res.download(file);
}

router.route('/api/pais/xlsx').get(asyncHandler(getPaisesXLSX));

/**
 * Chamada para método de controller para geração síncrona de arquivo xlsx
 * 
 * @param {*} req objeto de request da chamada http
 * @param {*} res objeto de response da chamada http
 */
async function getPaisesXLSX(req, res){
    let file = await paisCtrl.getPaisesXLSX();
    res.download(file);
}

module.exports = router;