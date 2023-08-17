const express = require('express');
const router = express.Router();
const cartController = require('../cart/Cart');

router.get('/cart', cartController.getCart); // Obtener el contenido del carrito
router.post('/add', cartController.addToCart); // Agregar producto al carrito

module.exports = router;
