const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const authCtrl = {};

/*
 Registrar un nuevo usuario
 Método: POST
 Ruta: /api/register
 */
authCtrl.register = async (req, res) => {
    try {
        const { username, correo, password} = req.body;

    //Verificar si existe el usuario
        const userExists = await Usuario.findOne({username});
        if (userExists) {
            return res.status(400).json({error: 'El usuario ya existe'});
        }

        //Encriptar la contraseña 
        const hashedPassword = await bcrypt.hash(password, 9);

        const nuevoUsuario = new Usuario({username, correo, password: hashedPassword});
        await nuevoUsuario.save();

        res.json({status: 'Usuario registrado exitosamente'});
    }
    catch (error) {
        res.status(400).json({error: 'Error al registrar usuario', detalle: error.message});
    }
    
};
/*
  Iniciar sesión de usuario
  Método: POST
  Ruta: /api/login
 */
authCtrl.login = async (req, res) => {
    try {
        const {username, password} = req.body;
        // buscar usuario
        const usuario = await Usuario.findOne({username});
        if(!usuario) {
          return res.status(404).json({error: 'Usuario no encontrado'});
          }
           // Verificar contraseña 
        const passwordValid = await bcrypt.compare(password, usuario.password);
        if (!passwordValid) 
          return res.status(401).json({ error: 'Contraseña incorrecta' });
        

          res.json({status: 'Login exitoso', usuario});
        }
        catch (error) {
            res.status(500).json({error: 'Error al iniciar sesión', detalle: error.message});
        }
        
    };
    module.exports = authCtrl;
