const express = require('express');
const router = express.Router();
const { getDatos , getProductoById} = require('../data/Data'); // Importa las funciones de controlador

router.route('/datos').get(getDatos); // Utiliza un método GET para obtener los datos
// Agrega más rutas si es necesario
router.get('/producto/:id', getProductoById);
module.exports = router;