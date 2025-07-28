
const ProductoServicio = require('../models/productoServicio.model');
const productoServicioCtrl = {};

// Crear un producto o servicio
productoServicioCtrl.crear = async (req, res) => {
    console.log('Datos recibidos en el backend:', req.body);
    const nuevoItem = new ProductoServicio(req.body);
    await nuevoItem.save();
    res.json({mensaje: 'Guardado correctamente'});

  };

// Obtener todos los productos y servicios
productoServicioCtrl.getTodos = async (req, res) => {
    const items = await ProductoServicio.find();
    res.json(items);

};

// Obtener producto y servicios por ID
productoServicioCtrl.getPorId = async (req, res) => {
    const item = await ProductoServicio.findById(req.params.id);
    res.json(item);
  
};
  

// Actualizar producto o servicio
productoServicioCtrl.actualizar = async (req, res) => {
  
    const item = await ProductoServicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  
};

// Eliminar producto
productoServicioCtrl.eliminar = async (req, res) => {
  
    await ProductoServicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Eliminado correctamente' });
  
 
};
 
module.exports = productoServicioCtrl;

const ProductoServicio = require('../models/productoServicio.model');
const productoServicioCtrl = {};

// Crear un producto o servicio
productoServicioCtrl.crear = async (req, res) => {
  try {
    const nuevoItem = new ProductoServicio(req.body);
    await nuevoItem.save();
    res.status(201).json({mensaje: 'Guardado correctamente'});
  } catch (error) {
    res.status(500).json({mensaje: 'Error al guardar', error});
  }
  };

// Obtener todos los productos y servicios
productoServicioCtrl.getTodos = async (req, res) => {
  try {
    const items = await ProductoServicio.find();
    res.json(items);
} catch (error) {
  res.status(500).json({mensaje: 'Error al obtener los datos', error});
}
};

// Obtener producto y servicios por ID
productoServicioCtrl.getPorId = async (req, res) => {
  try {
    const item = await ProductoServicio.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).json({mensaje: 'Error al buscar por ID', error});
  }
};
  

// Actualizar producto o servicio
productoServicioCtrl.actualizar = async (req, res) => {
  try {
    const item = await ProductoServicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(500).json({mensaje: 'Error al actualizar', error});
  }
};

// Eliminar producto
productoServicioCtrl.eliminar = async (req, res) => {
  try {
    await ProductoServicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({mensaje: 'Error al eliminar', error});
  }
 
};
 
module.exports = productoServicioCtrl;

