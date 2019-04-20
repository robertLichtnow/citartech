const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Esquema da entidade país 
 */
let PaisSchema = new Schema({
    sigla:{
        type: String
    },
    nome:{
        type: String
    },
});

/**
 * Atributo virtual da entidade país 
 */
PaisSchema.virtual('nomeCompleto').get(function() {
    return `(${this.sigla}) ${this.nome}`;
});

/**
 * Configuração necessária para que o atributo virtual sempre seja gerado
 * quando for feito fetch dos dados do banco
 */
PaisSchema.set('toObject',{getters:true});
PaisSchema.set('toJSON',{getters:true});

module.exports = mongoose.model('pais',PaisSchema);
