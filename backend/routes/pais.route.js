const express = require('express')
const asyncHandler = require('express-async-handler')
const paisCtrl = require('../controllers/pais.controller');

const router = express.Router();

router.route('/api/pais').get(asyncHandler(getPaises));

async function getPaises(req, res){
    let paises = await paisCtrl.getPaises();
    res.json(paises)
}

router.route('/api/pais/csv').get(asyncHandler(getPaisesCSV));

async function getPaisesCSV(req, res){
    let file = await paisCtrl.getPaisesCSV();
    res.download(file);
}

router.route('/api/pais/xlsx').get(asyncHandler(getPaisesXLSX));

async function getPaisesXLSX(req, res){
    let file = await paisCtrl.getPaisesXLSX();
    res.download(file);
}

module.exports = router;