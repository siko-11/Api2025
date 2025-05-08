import app from './app.js'
import {PORT} from './config.js'
import {BD_HOST} from './config.js'
app.listen (PORT);//300
console.log('El servidor esta entrando por el puerto :' , PORT);
console.log('El servidor esta entrando por el puerto :' , BD_HOST);
