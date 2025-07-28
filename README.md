# 📦 API del Proyecto — Backend de Empleados, Usuarios y Productos/Servicios

Proyecto backend desarrollado en **Node.js**, usando **Express**, **MongoDB (Mongoose)** y autenticación con **bcrypt**.  
También incluye el frontend desarrollado en **Angular**, para una solución completa fullstack.

---

## 📂 Estructura del Proyecto

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

## 🛠️ Tecnologías Utilizadas

### 🔹 Backend:
- Node.js
- Express
- MongoDB + Mongoose
- Bcrypt
- CORS
- Morgan
- Nodemon

### 🔹 Frontend:
- Angular
- TypeScript
- HTML + CSS
- Angular CLI
- Bootstrap (opcional)

---

## 🚀 Instalación y Uso

### 1️⃣ Clona este repositorio

```bash
git clone https://github.com/Tatianarv206/API-del-proyecto.git
cd API-del-proyecto
2️⃣ Instala dependencias backend
bash
Copiar
Editar
cd backend
npm install
npm run dev
3️⃣ Instala dependencias frontend
bash
Copiar
Editar
cd ../frontend
npm install
ng serve
🌐 Endpoints Backend
📁 Empleados
Método	Ruta	Descripción
GET	/api/empleados	Obtener todos los empleados
POST	/api/empleados	Crear un nuevo empleado
GET	/api/empleados/:id	Obtener un empleado por ID
PUT	/api/empleados/:id	Actualizar un empleado por ID
DELETE	/api/empleados/:id	Eliminar un empleado por ID

📁 Autenticación
Método	Ruta	Descripción
POST	/api/register	Registrar un nuevo usuario
POST	/api/login	Iniciar sesión de usuario

📁 Productos y Servicios
Método	Ruta	Descripción
GET	/api/productos-servicios	Obtener todos los productos/servicios
GET	/api/productos-servicios/:id	Obtener uno por ID
POST	/api/productos-servicios	Crear uno nuevo
PUT	/api/productos-servicios/:id	Actualizar uno por ID
DELETE	/api/productos-servicios/:id	Eliminar uno por ID

🧪 Ejemplos JSON para Postman
Se encuentran en la carpeta postman-ejemplos/:

pgsql
Copiar
Editar
postman-ejemplos/
├── empleados.json
├── usuarios.json
└── productos-servicios.json
