const mongoose = require('mongoose');

const InsumoSchema = new mongoose.Schema({
    idinsumo: { type: Number, required: true },
    nominsumo: { type: String, required: true },
    idproveedor: { type: Number, required: true },
    preUni: { type: Number, required: true },
    stock: { type: Number, required: true }
});

module.exports = mongoose.model('Insumo', InsumoSchema);
