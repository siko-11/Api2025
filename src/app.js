import express from 'express'
//importar las rutas
import clientesRoutes from './routes/clientesRoutes.js'
import productosRouter from './routes/productos_route.js'
import usuariosRouter from './routes/usuarios_route.js'
import pedidosRouter from './routes/pedidos_route.js'
import detallespedidosRouter from './routes/detallespedidos_route.js'
const app = express();
app.use(express.json()); //interpretar objetos json
//indicar que rutas se utilizo ojo
app.use('/api',clientesRoutes)
app.use('/api', productosRouter)
app.use('/api', usuariosRouter)
app.use('/api', pedidosRouter)
app.use('/api', detallespedidosRouter)
app.use((req,resp,next)=>{
    resp.status(400).json({
        message:'Pagina no encontrada'
    })
})
export default app;