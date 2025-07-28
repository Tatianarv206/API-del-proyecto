const express = require('express');
const router = express.Router();
const productoServicioCtrl = require('../controllers/productoServicio.controller');

//Crear producto o servicio
router.post('/', productoServicioCtrl.crear);

//Obtener todos
router.get('/', productoServicioCtrl.getTodos);

// Obtener uno por Id
router.get('/:id', productoServicioCtrl.getPorId);

//Actualizar por id
router.put('/:id', productoServicioCtrl.actualizar);

// Eliminar por id
router.delete('/:id', productoServicioCtrl.eliminar);

module.exports = router;
