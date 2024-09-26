const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
    idproveedor: { type: Number, required: true },
    nombrecia: { type: String, required: true }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
