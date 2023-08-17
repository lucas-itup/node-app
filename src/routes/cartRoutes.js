const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const cartController = require('../cart/Cart');

router.get('/cart', cartController.getCart); // Obtener el contenido del carrito
router.post('/add', authMiddleware, cartController.addToCart); // Agregar producto al carrito

module.exports = router;
