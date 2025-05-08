import express from 'express'
//importar las rutas
import clientesRoutes from './routes/clientesRoutes.js'
const app = express();
app.use(express.json()); //interpretar objetos json
//indicar que rutas se utilizo ojo
app.use('/api',clientesRoutes)
app.use((req,resp,next)=>{
    resp.status(400).json({
        message:'Pagina no encontrada'
    })
})
export default app;