const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/ReservaController');

router.post('/reservas', reservaController.crearReserva);
router.get('/reservas', reservaController.obtenerReservas);
router.get('/reservas/:id', reservaController.obtenerReserva);
router.put('/reservas/:id', reservaController.actualizarReserva);
router.delete('/reservas/:id', reservaController.eliminarReserva);
router.get('/reservas/filtrar', reservaController.filtrarReservas);

module.exports = router;


