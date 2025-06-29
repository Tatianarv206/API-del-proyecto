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
