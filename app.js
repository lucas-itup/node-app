const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
app.use(cors({
    origin: 'https://rich-gray-bream-cuff.cyclic.app', // Cambia a la URL de tu aplicación React
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
// Conectar a la base de datos (debes descomentar esto si tienes una configuración adecuada)

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lucaspupillilp:sH6-xzxdGmsSBmw@cluster0.fdpf52b.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


// Manejo de errores no controlados
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});