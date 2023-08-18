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
    const productIds = req.body.carrito; // Cambio en la obtención de los IDs de productos

    const userId = req.body.userId; // Obtén userId del cuerpo de la solicitud
    console.log(req.body.userId); // Verifica qué se está recibiendo en el cuerpo de la solicitud
    console.log(req.body); // Verifica qué se está recibiendo en el cuerpo de la solicitud
    console.log("hola"); // Verifica qué se está recibiendo en el cuerpo de la solicitud
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

// Implementa los controladores para actualizar y eliminar productos del carrito
