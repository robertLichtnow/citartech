import Pais from '../models/pais.model'

module.exports = {
    getPaises
}

async function getPaises(){
    return await Pais.find({}).sort({'nome':-1});
} 