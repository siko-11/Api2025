import express from 'express';
import {
    getProductos,
    getProductoById,
    postProducto,
    putProducto,
    patchProducto,
    deleteProductoById
} from '../controladores/productosCtrl.js';

const routes = express.Router();

routes.get('/productos', getProductos);
routes.get('/productos/:id', getProductoById);
routes.post('/productos', postProducto);
routes.put('/productos/:id', putProducto);
routes.patch('/productos/:id', patchProducto);
routes.delete('/productos/:id', deleteProductoById);

export default routes;
