import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let PaisSchema = new Schema({
    sigla:{
        type: String
    },
    nome:{
        type: String
    },
});

PaisSchema.virtual('nomeCompleto').get(function() {
    return `(${this.sigla}) ${this.nome}`;
});

PaisSchema.set('toObject',{getters:true});
PaisSchema.set('toJSON',{getters:true});

export default mongoose.model('pais',PaisSchema);
