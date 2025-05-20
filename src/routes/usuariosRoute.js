import express from "express";
import {
    getUsuarios,
    getUsuariosxid,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios,
    login
} from "../controladores/usuariosCtrl.js";
import { verificarToken } from '../middlewares/auth.js';

const router = express.Router();

// Rutas públicas
router.post('/login', login);

// Rutas protegidas con JWT
router.get('/usuarios', verificarToken, getUsuarios);
router.get('/usuarios/:id', verificarToken, getUsuariosxid);
router.post('/usuarios', verificarToken, postUsuarios);
router.put('/usuarios/:id', verificarToken, putUsuarios);
router.patch('/usuarios/:id', verificarToken, patchUsuarios);
router.delete('/usuarios/:id', verificarToken, deleteUsuarios);

export default router;
