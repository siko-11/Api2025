import jwt from 'jsonwebtoken';

const secret = 'secreto123';

export const generarToken = (usuario) => {
    return jwt.sign({ usuario }, secret, { expiresIn: '1h' });
};

export const verificarToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};
