const Reserva = require('../models/Reserva');

exports.crearReserva = async (req, res) => {
    try {
        const { hotel, tipo_habitacion, numero_huespedes, fecha_inicio, fecha_fin, estado } = req.body;
        const nuevaReserva = new Reserva({ hotel, tipo_habitacion, numero_huespedes, fecha_inicio, fecha_fin, estado });
        await nuevaReserva.save();
        res.status(201).send('Reserva creada');
    } catch (error) {
        res.status(500).send('Error al crear la reserva');
    }
};

// Obtener todas las reservas
exports.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).send('Error al obtener las reservas');
    }
};

// Obtener una reserva específica
exports.obtenerReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findById(id);
        if (!reserva) {
            res.status(404).send('Reserva no encontrada');
        } else {
            res.status(200).json(reserva);
        }
    } catch (error) {
        res.status(500).send('Error al obtener la reserva');
    }
};

// Actualizar una reserva
exports.actualizarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const reserva = await Reserva.findByIdAndUpdate(id, { estado }, { new: true });
        if (!reserva) {
            res.status(404).send('Reserva no encontrada');
        } else {
            res.status(200).send('Reserva actualizada');
        }
    } catch (error) {
        res.status(500).send('Error al actualizar la reserva');
    }
};

// Eliminar una reserva
exports.eliminarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByIdAndDelete(id);
        if (!reserva) {
            res.status(404).send('Reserva no encontrada');
        } else {
            res.status(200).send('Reserva eliminada');
        }
    } catch (error) {
        res.status(500).send('Error al eliminar la reserva');
    }
};

// Filtrar reservas
exports.filtrarReservas = async (req, res) => {
    try {
        // Implementar lógica de filtrado según los parámetros de la consulta
        // Ejemplo de filtro básico por estado
        const { estado } = req.query;
        const reservas = await Reserva.find({ estado });
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).send('Error al filtrar las reservas');
    }
};

