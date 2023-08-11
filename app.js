const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(cors({
    origin: 'https://integrador-react-ashy.vercel.app', // Cambia a la URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el uso de cookies y autenticación
}));
// Iniciar el servidor en el puerto especificado
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});
app.use(express.json()); // Middleware para analizar el cuerpo JSON
// Requiere las rutas de autenticación y las asocia a la URL "/login"
app.use("/auth", require("./src/routes/authRoutes"));
// Conectar a la base de datos (debes descomentar esto si tienes una configuración adecuada)
/*const connectDB = require("./db");
connectDB();*/


// Manejo de errores no controlados
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});