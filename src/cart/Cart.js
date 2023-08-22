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
    const productData = req.body.carrito;

    const userId = req.body.userId;
    console.log(req.body.userId);
    console.log(req.body);
    console.log("hola");
    try {
        const cart = await Cart.findOneAndUpdate(
            { userId },
            {
                $addToSet: {
                    products: {
                        $each: productData.map(product => ({
                            productId: product.productId,
                            quantity: product.cantidad // Agregar la cantidad al objeto del producto
                        })),
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
