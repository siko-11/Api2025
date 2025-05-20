// src/middlewares/auth.js
import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).json({ mensaje: 'Token no proporcionado' });

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'secreto123'); 
        req.usuario = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ mensaje: 'Token inválido' });
    }
};
