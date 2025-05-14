import express from 'express';

import {
    getUsuarios,
    getUsuarioById,
    postUsuario,
    putUsuario,
    patchUsuario,
    deleteUsuarioById
} from '../controladores/usuariosCtrl.js';

const routes = express.Router();

routes.get('/usuarios', getUsuarios);
routes.get('/usuarios/:id', getUsuarioById);
routes.post('/usuarios', postUsuario);
routes.put('/usuarios/:id', putUsuario);
routes.patch('/usuarios/:id', patchUsuario);
routes.delete('/usuarios/:id', deleteUsuarioById);

export default routes;