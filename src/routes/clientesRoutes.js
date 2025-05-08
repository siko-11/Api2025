import express from 'express'
import { getClientes } from '../controladores/clientesCtrl.js'

const routes = express.Router();

routes.get('/clientes',getClientes)
export default routes