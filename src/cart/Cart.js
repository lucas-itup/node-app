const Cart = require('../models/cartModel');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user._id }); // Requiere autenticación
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito' });
    }
};

exports.addToCart = async (req, res) => {
    const userId = req.body.userId; // Obtén userId del cuerpo de la solicitud
    try {
        const cart = await Cart.findOneAndUpdate(
            { userId },
            {
                $addToSet: {
                    products: {
                        productId: req.body.productId,
                    },
                },
            },
            { upsert: true, new: true }
        );

        res.json(cart);
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};

// Implementa los controladores para actualizar y eliminar productos del carrito
