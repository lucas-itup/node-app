const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Genera el token JWT
            const token = jwt.sign(
                { userId: user._id },
                'tu_clave_secreta', // Reemplaza con una clave secreta segura
                { expiresIn: '1h' } // Opcional: expira en 1 hora
            );

            return res.status(200).json({
                message: "Login successful",
                user,
                token, // Envía el token al cliente
            });
        } else {
            return res.status(401).json({
                message: "Login not successful",
                error: "Invalid password",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};
exports.register = async (req, res, next) => {
    const { username, password , nombre, apellido , telefono, email } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        });
    }

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({
                message: "Registration not successful",
                error: "Username already exists",
            });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({
            username,
            password: hashedPassword,
            nombre,
            apellido,
            telefono,
            email
        });

        // Guardar el nuevo usuario en la base de datos
        const savedUser = await newUser.save();

        return res.status(201).json({
            message: "Registration successful",
            user: savedUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};
