<<<<<<< HEAD
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
=======
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
    require: true 
  }
});
module.exports = mongoose.model('ProductoServicio', productoServicioSchema);
>>>>>>> 09e395ce57cfd7d1c2f6dd4a84443227441dcebc
