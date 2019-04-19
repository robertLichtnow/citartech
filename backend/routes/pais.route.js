const express = require('express')
const asyncHandler = require('express-async-handler')
const paisCtrl = require('../controllers/pais.controller');

const router = express.Router();

router.route('/pais').get(asyncHandler(getPaises));

async function getPaises(req, res){
    let paises = await paisCtrl.getPaises();
    res.json(paises)
}

module.exports = router;