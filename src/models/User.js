const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
    },
    apellido: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    telefono: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    },
});

// Corrige la línea de exportación
module.exports = Mongoose.model("User", UserSchema);