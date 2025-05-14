import express from 'express';
import {
    getPedidosDetalle,
    getPedidoDetalleById,
    postPedidoDetalle,
    putPedidoDetalle,
    patchPedidoDetalle,
    deletePedidoDetalleById
} from '../controladores/detallespedidosCtrl.js';

const routes = express.Router();

routes.get('/pedidosdetalle', getPedidosDetalle);
routes.get('/pedidosdetalle/:id', getPedidoDetalleById);
routes.post('/pedidosdetalle', postPedidoDetalle);
routes.put('/pedidosdetalle/:id', putPedidoDetalle);
routes.patch('/pedidosdetalle/:id', patchPedidoDetalle);
routes.delete('/pedidosdetalle/:id', deletePedidoDetalleById);

export default routes;
