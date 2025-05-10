import express from 'express'
import { getClientes,getClientesxid,postClientes,putClientes,patchClientes,deleteCliente} from '../controladores/clientesCtrl.js'

const routes = express.Router();

routes.get('/clientes',getClientes)
routes.get('/clientes/:id',getClientesxid)
routes.post('/clientes/',postClientes)
routes.put('/clientes/:id',putClientes)
routes.patch('/clientes/:id',patchClientes)
routes.delete('/clientes/:id',deleteCliente)

export default routes