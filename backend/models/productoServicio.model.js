const mongoose = require('mongoose');

const productoServicioSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
  },
  descripcion: { 
    type: String 
  },
  precio: { 
    type: Number, 
    required: true 
  },
  tipo: { 
    type: String, 
    enum: ['producto', 'servicio'],  
    required: true 
  }
});
module.exports = mongoose.model('ProductoServicio', productoServicioSchema);
