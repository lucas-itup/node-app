ENDPOINTS

INICIAR SESION: https://rich-gray-bream-cuff.cyclic.app/auth/login { username, password }

REGISTRAR USUARIO: https://rich-gray-bream-cuff.cyclic.app/auth/register
{
                    nombre,
                    apellido,
                    email,
                    telefono,
                    username: usuario,
                    password,
                });

LISTAR PRODUCTOS: https://rich-gray-bream-cuff.cyclic.app/data/datos

LISTAR PRODUCTO: https://rich-gray-bream-cuff.cyclic.app/data/producto/${params.id}

REGISTRAR COMPRA: https://rich-gray-bream-cuff.cyclic.app/cart/add
