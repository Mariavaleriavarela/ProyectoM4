const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
    hotel: String,
    tipo_habitacion: String,
    numero_huespedes: Number,
    fecha_inicio: Date,
    fecha_fin: Date,
    estado: String
});

const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;
