const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController'); // Llamamos al controlador

router.get('/', clienteController.getClientes);  // Al hacer GET en /clientes, llamamos al método getClientes del controlador

module.exports = router;
