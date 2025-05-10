import {conmysql} from '../bd.js'
export const obtenerClientes = (req,res)=>{
    res.send ('Lista de clientes');
}
export const getClientes = async (req, res) => {
    try {
        const [result] = await conmysql.query(' SELECT * FROM clientes ');
        res.json({ cant: result.length, data: result });
    } catch (error) {
        console.error('Error en getClientes:', error); // ← Esto muestra el error real en consola
        return res.status(500).json({ message: "error en el servidor" });
    }
}
//retorna cliente
export const getClientesxid= async (req, res) => {
    try {
        const miID = req.params.id
        const [result] = await conmysql.query(' SELECT * FROM clientes where cli_id=?',[miID]);
        if(result.length<=0) return res.status(400).json({
            cli_id: 0,
            message:"Cliente no encontrado"
        })
        res.json(result[0])
    } catch (error) {
        console.error('Error en getClientes:', error); // ← Esto muestra el error real en consola
        return res.status(500).json({ message: "error en el servidor" });
    }
}

//funcion para insertar un cliente
export const postClientes = async (req,res) => {
    try {
       const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}= req.body 
       const [result] = await conmysql.query('INSERT INTO clientes(cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad) VALUES (?,?,?, ?, ?, ?, ?)',
        [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad]);
        res.send({
            id:result.insertId
        })
    } catch (error) {
        return res.status(500).json({ message: "error en el servidor" });
    }

}
export const putClientes = async (req,res) => {
    try {
        const {id}= req.params
       const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}= req.body 
       const [result] = await conmysql.query(
        'UPDATE clientes SET cli_identificacion=?, cli_nombre=?, cli_telefono=?, cli_correo=?, cli_direccion=?, cli_pais=?, cli_ciudad=? WHERE cli_id=?',
        [cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad,id]);
        if(result.affectedRows<=0)return res.status(400).json({
            message: "cliente no encontrado"
        })
        const [row] = await conmysql.query('select * from clientes where cli_id=?', [id])
        res.json(row[0])
    } catch (error) {
        return res.status(500).json({ message: "error en el servidor" });
    }

}
export const patchClientes = async (req,res) => {
    try {
        const {id}= req.params
       const {cli_identificacion, cli_nombre, cli_telefono, cli_correo, cli_direccion, cli_pais, cli_ciudad}= req.body 
       const [result] = await conmysql.query(
        'UPDATE clientes SET cli_identificacion= IFNULL(?,cli_identificacion), cli_nombre= IFNULL(?,cli_nombre), cli_telefono= IFNULL(?,cli_telefono), cli_correo= IFNULL(?,cli_correo), cli_direccion= IFNULL(?,cli_direccion), cli_pais= IFNULL(?,cli_pais), cli_ciudad= IFNULL(?,cli_ciudad) WHERE cli_id=?',
        [cli_identificacion ?? null, cli_nombre ?? null, cli_telefono ?? null, cli_correo ?? null, cli_direccion ?? null, cli_pais ?? null, cli_ciudad ?? null,id]);
        if(result.affectedRows<=0)return res.status(400).json({
            message: "cliente no encontrado"
        })
        const [row] = await conmysql.query('select * from clientes where cli_id=?', [id])
        res.json(row[0])
    } catch (error) {
        console.error('Error en patchClientes:', error);
        return res.status(500).json({ message: "error en el servidor" });
    }
}

//funcion para eliminar
export const deleteCliente= async (req, res) => {
    try {
        const miID = req.params.id
        const [result] = await conmysql.query(' DELETE FROM clientes where cli_id=?',[miID]);
        if(result.length<=0) return res.status(400).json({
            message:"Cliente no encontrado"
        })
        res.sendStatus(204)
    } catch (error) {
        console.error('Error en getClientes:', error); // ← Esto muestra el error real en consola
        return res.status(500).json({ message: "error en el servidor" });
    }
}