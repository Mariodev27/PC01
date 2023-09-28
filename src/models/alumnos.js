const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
  nombre:  String,
  apellido: String,
  edad: Number,
  direccion: String
});

// Crear el modelo
const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;