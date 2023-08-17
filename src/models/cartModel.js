const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User', // Puedes relacionar el carrito con el usuario si hay autenticación
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Referencia al modelo de producto
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
});

module.exports = mongoose.model('Cart', cartSchema);
