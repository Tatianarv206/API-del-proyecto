const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    username: { type: String, required: true, unique: true},
    correo: {type: String, required: true, unique: true},
    password: {type: String, required: true },
});


module.exports = mongoose.model('Usuario',UsuarioSchema);