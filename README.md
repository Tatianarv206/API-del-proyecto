# 📦 API del Proyecto — Backend y Frontend de Empleados, Usuarios y Productos/Servicios

Proyecto fullstack desarrollado en **Node.js** (backend) y **Angular** (frontend), usando **Express**, **MongoDB (Mongoose)** y autenticación con **bcrypt**.  
Permite gestionar empleados, usuarios, productos y servicios, con una interfaz moderna.

---

## 📂 Estructura del proyecto
API-del-proyecto/
│
├── backend/
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── empleado.controller.js
│ │ └── productoServicio.controller.js
│ │
│ ├── models/
│ │ ├── empleado.js
│ │ ├── usuario.js
│ │ └── productoServicio.model.js
│ │
│ ├── routes/
│ │ ├── auth.route.js
│ │ ├── empleado.route.js
│ │ └── productoServicio.routes.js
│ │
│ ├── database.js
│ └── index.js
│
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ ├── assets/
│ │ ├── environments/
│ │ └── index.html, main.ts, styles.css, etc.
│ ├── angular.json
│ ├── package.json
│ ├── tsconfig.json
│ └── README.md
│
├── postman-ejemplos/
│ ├── empleados.json
│ ├── usuarios.json
│ └── productos-servicios.json
│
├── node_modules/
├── package-lock.json
├── package.json
└── README.md

yaml
Copiar
Editar

---

## 📌 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Bcrypt
- Cors
- Morgan
- Nodemon
- Angular
- TypeScript
- Postman (para pruebas)

---

## 📦 Instalación

1️⃣ Clona este repositorio:
git clone https://github.com/Tatianarv206/API-del-proyecto.git

css
Copiar
Editar

2️⃣ Ingresa a la carpeta:
cd API-del-proyecto

css
Copiar
Editar

3️⃣ Instala las dependencias del backend:
cd backend
npm install
npm run dev

yaml
Copiar
Editar

4️⃣ En una nueva terminal, instala y ejecuta el frontend:
cd ../frontend
npm install
ng serve

yaml
Copiar
Editar

---

## 📌 Endpoints disponibles

📁 Empleados
Método Ruta Descripción
GET /api/empleados Obtener todos los empleados
POST /api/empleados Crear un nuevo empleado
GET /api/empleados/:id Obtener un empleado por ID
PUT /api/empleados/:id Actualizar un empleado por ID
DELETE /api/empleados/:id Eliminar un empleado por ID

Copiar
Editar

📁 Autenticación
Método Ruta Descripción
POST /api/register Registrar un nuevo usuario
POST /api/login Iniciar sesión de usuario

Copiar
Editar

📁 Productos y Servicios
Método Ruta Descripción
GET /api/productos-servicios Obtener todos los productos y servicios
GET /api/productos-servicios/:id Obtener un producto o servicio por su ID
POST /api/productos-servicios Crear un nuevo producto o servicio
PUT /api/productos-servicios/:id Actualizar un producto o servicio
DELETE /api/productos-servicios/:id Eliminar un producto o servicio

yaml
Copiar
Editar

---

## 📄 Ejemplos JSON (Postman)
Se encuentran en la carpeta:
postman-ejemplos/
├── empleados.json
├── usuarios.json
└── productos-servicios.json
