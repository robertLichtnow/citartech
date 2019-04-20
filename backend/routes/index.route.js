const express = require('express')

const router = express.Router();3

/**
 * Rota para a página inicial
 */
router.route('/').get(index);

/**
 * Função que renderiza a página inicial da aplicação
 * 
 * @param {*} req objeto de request da chamada http
 * @param {*} res objeto de response da chamada http
 */
function index(req, res){
    res.render('index');
}

module.exports = router;