
const connectDB = require('../../db');
const mongoose = require("mongoose");
async function getDatos(req, res) {
    try {
        await connectDB(); // Llama a la función para conectarte a la base de datos
        const db = mongoose.connection; // Accede a la conexión establecida
        const collection = db.collection('productos'); // Cambia esto por el nombre de tu colección

        const datos = await collection.find({}).toArray();
        res.json(datos);
    } catch (err) {
        console.error('Error al obtener datos', err);
        res.status(500).send('Error al obtener datos');
    }
}
async function getProductoById(req, res) {
    try {
        const productId = req.params.id; // Obtiene el ID del parámetro de la URL
        await connectDB(); // Llama a la función para conectarte a la base de datos
        const db = mongoose.connection; // Accede a la conexión establecida
        const collection = db.collection('productos'); // Cambia esto por el nombre de tu colección

        const producto = await collection.findOne({ _id: new mongoose.Types.ObjectId(productId) }); // Usar 'new' para crear el objeto ObjectId
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(producto);
    } catch (err) {
        console.error('Error al obtener el producto por ID', err);
        res.status(500).send('Error al obtener el producto por ID');
    }
}

module.exports = {
    getDatos,
    getProductoById
    // Exporta más funciones de controlador si es necesario
};