const express = require('express');
const router = express.Router();
const Proveedor = require('../models/Proveedor');
const Insumo = require('../models/Insumo');

// Listar todos los Proveedores
router.get('/proveedores', async (req, res) => {
    const proveedores = await Proveedor.find();
    res.render('clientes', { proveedores });
});

// Listar todos los TB_INSUMO
router.get('/insumos', async (req, res) => {
    const insumos = await Insumo.find();
    res.render('clientes', { insumos });
});

module.exports = router;
