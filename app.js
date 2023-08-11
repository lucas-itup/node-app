const express = require("express");
const app = express();
const PORT = 3000;

// Iniciar el servidor en el puerto especificado
const server = app.listen(PORT, () =>
    console.log(`Server connected to port ${PORT}`)
);
app.use(express.json()); // Middleware para analizar el cuerpo JSON
// Requiere las rutas de autenticación y las asocia a la URL "/login"
app.use("/auth", require("./src/routes/authRoutes"));

// Conectar a la base de datos (debes descomentar esto si tienes una configuración adecuada)
 const connectDB = require("./db");
 connectDB();

// Manejo de errores no controlados
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});