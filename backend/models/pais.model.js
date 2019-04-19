import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let PaisSchema = new Schema({
    sigla:{
        type: String
    },
    nome:{
        type: String
    }
});

PaisSchema.virtual('nomeCompleto').get(() => {
    return `(${this.sigla}) ${this.nome}`;
});

export default mongoose.model('pais',PaisSchema);
