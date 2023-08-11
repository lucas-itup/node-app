// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Otros campos
});

module.exports = mongoose.model('Product', productSchema);