const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const dataRoutes = require('./src/routes/dataRoutes'); // Importa las rutas de datos
const path = require('path');
app.use(cors({
   origin: 'https://integrador-react-ashy.vercel.app', // Cambia a la URL de tu aplicación React
    //origin: 'http://localhost:3000', // Cambia a la URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el uso de cookies y autenticación
}));
// Iniciar el servidor en el puerto especificado
const server = app.listen(PORT, () =>
    console.log(`Server connected to port ${PORT}`)
);
app.use(express.json()); // Middleware para analizar el cuerpo JSON
// Requiere las rutas de autenticación y las asocia a la URL "/login"
app.use("/auth", require("./src/routes/authRoutes"));
app.use('/data', dataRoutes);
app.use(express.static(path.join(__dirname, 'public')));
// Conectar a la base de datos (debes descomentar esto si tienes una configuración adecuada)
const connectDB = require("./db");
connectDB();

// Manejo de errores no controlados
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});