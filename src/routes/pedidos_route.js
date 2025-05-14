import express from 'express';
import {
    getPedidos,
    getPedidoById,
    postPedido,
    putPedido,
    patchPedido,
    deletePedidoById
} from '../controladores/pedidosCtrl.js';
// 
const routes = express.Router();

routes.get('/pedidos', getPedidos);
routes.get('/pedidos/:id', getPedidoById);
routes.post('/pedidos', postPedido);
routes.put('/pedidos/:id', putPedido);
routes.patch('/pedidos/:id', patchPedido);
routes.delete('/pedidos/:id', deletePedidoById);

export default routes;
