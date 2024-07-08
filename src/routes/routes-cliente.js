// src/routes/routes-cliente.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/controllers-cliente');


// debe llamarse de la misma forma los id
router.get('/carta', clienteController.getAllProductos);
router.get('/', clienteController.getAllClientes);
router.get('/:id', clienteController.getClienteById);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);



module.exports = router;

