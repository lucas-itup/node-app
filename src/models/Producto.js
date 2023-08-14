// models/Product.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    },
    img1: {
        type: String,

    },
    img2: {
        type: String,
        minlength: 6,
    },
    cantidad: {
        type: String,
        minlength: 6,
    },
});

module.exports = mongoose.model('Product', productoSchema);