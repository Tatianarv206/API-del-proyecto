# 📦 API del Proyecto — Backend de Empleados y Usuarios

Proyecto backend desarrollado en **Node.js**, usando **Express**, **MongoDB (Mongoose)** y autenticación con **bcrypt**. Permite gestionar empleados, usuarios y autenticación básica.

---

## 📂 Estructura del proyecto
```
API_BACKEND/
│
├── backend/
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ └── empleado.controller.js
│ │
│ ├── models/
│ │ ├── empleado.js
│ │ └── usuario.js
│ │
│ ├── routes/
│ │ ├── auth.route.js
│ │ └── empleado.route.js
│ │
│ ├── database.js
│ └── index.js
│
├── postman-examples/
│ ├── empleados.json
│ └── usuarios.json
│
├── node_modules/
├── package-lock.json
├── package.json
└── README.md
```
---

## 📌 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Bcrypt
- Cors
- Morgan
- Nodemon
- Postman (para pruebas)

---

## 📦 Instalación

1️⃣ Clona este repositorio:

```
git clone https://github.com/Tatianarv206/API-del-proyecto.git
```
2️⃣ Ingresa a la carpeta:
```
cd API-del-proyecto
```
3️⃣ Instala las dependencias:
```
npm install
```
4️⃣ Levanta el servidor:
```
npm run dev
```
📌 Endpoints disponibles
📁 Empleados
```
Método	Ruta	Descripción
GET	/api/empleados	Obtener todos los empleados
POST	/api/empleados	Crear un nuevo empleado
GET	/api/empleados/:id	Obtener un empleado por ID
PUT	/api/empleados/:id	Actualizar un empleado por ID
DELETE	/api/empleados/:id	Eliminar un empleado por ID
```
📁 Autenticación
```
Método	Ruta	Descripción
POST	/api/register	Registrar un nuevo usuario
POST	/api/login	Iniciar sesión de usuario
```
📌 📄 Ejemplos JSON (Postman)
```
Se encuentran en la carpeta:
postman-examples/
├── empleados.json
└── usuarios.json
```
