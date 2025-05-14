import { conmysql } from "../bd.js";

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
    try {
        const [result] = await conmysql.query("SELECT * FROM usuarios");
        res.json({ cant: result.length, data: result });
    } catch (error) {
         console.error('Error en getClientes:', error); // ← Esto muestra el error real en consola
        return res.status(500).json({
            message: "Error al consultar usuarios"
        });
    }
};

// Obtener un usuario por ID
export const getUsuarioById = async (req, res) => {
    try {
        const [result] = await conmysql.query("SELECT * FROM usuarios WHERE usr_id = ?", [req.params.id]);
        if (result.length <= 0) {
            return res.status(400).json({
                usr_id: 0,
                message: "Usuario no encontrado"
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar usuario"
        });
    }
};

// Insertar un nuevo usuario
export const postUsuario = async (req, res) => {
    try {
        const {
            usr_usuario,
            usr_clave,
            usr_nombre,
            usr_telefono,
            usr_correo,
            usr_activo
        } = req.body;

        const [result] = await conmysql.query(
            "INSERT INTO usuarios (usr_usuario, usr_clave, usr_nombre, usr_telefono, usr_correo, usr_activo) VALUES (?, ?, ?, ?, ?, ?)",
            [usr_usuario, usr_clave, usr_nombre, usr_telefono, usr_correo, usr_activo]
        );

        res.json({ id: result.insertId });
    } catch (error) {
        return res.status(500).json({
            message: "Error al insertar usuario"
        });
    }
};

// Actualizar completamente un usuario
export const putUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            usr_usuario,
            usr_clave,
            usr_nombre,
            usr_telefono,
            usr_correo,
            usr_activo
        } = req.body;

        const [result] = await conmysql.query(
            "UPDATE usuarios SET usr_usuario=?, usr_clave=?, usr_nombre=?, usr_telefono=?, usr_correo=?, usr_activo=? WHERE usr_id=?",
            [usr_usuario, usr_clave, usr_nombre, usr_telefono, usr_correo, usr_activo, id]
        );

        if (result.affectedRows <= 0) {
            return res.status(400).json({
                message: "Usuario no encontrado para actualizar"
            });
        }

        const [row] = await conmysql.query("SELECT * FROM usuarios WHERE usr_id = ?", [id]);
        res.json(row[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar usuario"
        });
    }
};

// Actualización parcial (PATCH)
export const patchUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            usr_usuario,
            usr_clave,
            usr_nombre,
            usr_telefono,
            usr_correo,
            usr_activo
        } = req.body;

        const [result] = await conmysql.query(
            `UPDATE usuarios SET 
                usr_usuario = IFNULL(?, usr_usuario), 
                usr_clave = IFNULL(?, usr_clave), 
                usr_nombre = IFNULL(?, usr_nombre), 
                usr_telefono = IFNULL(?, usr_telefono), 
                usr_correo = IFNULL(?, usr_correo), 
                usr_activo = IFNULL(?, usr_activo)
            WHERE usr_id = ?`,
            [usr_usuario, usr_clave, usr_nombre, usr_telefono, usr_correo, usr_activo, id]
        );

        if (result.affectedRows <= 0) {
            return res.status(400).json({
                message: "Usuario no encontrado para actualizar"
            });
        }

        const [row] = await conmysql.query("SELECT * FROM usuarios WHERE usr_id = ?", [id]);
        res.json(row[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar parcialmente"
        });
    }
};

// Eliminar usuario por ID
export const deleteUsuarioById = async (req, res) => {
    try {
        const [result] = await conmysql.query("DELETE FROM usuarios WHERE usr_id = ?", [req.params.id]);

        if (result.affectedRows === 0) {
            return res.status(400).json({
                message: "Usuario no encontrado"
            });
        }

        res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar usuario"
        });
    }
};
