import {conmysql} from '../bd.js'
export const obtenerClientes = (req,res)=>{
    res.send ('Lista de clientes');
}
export const getClientes = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM clientes');
        res.json({ cant: result.length, data: result });
    } catch (error) {
        console.error('Error en getClientes:', error); // ← Esto muestra el error real en consola
        return res.status(500).json({ message: "error en el servidor" });
    }
}