const db = require('../db/db');

const getAllClientes = (req, res) => {
    const sql = 'SELECT * FROM clientes';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getClienteById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT nombre, apellido, telefono, direccion, localidad, provincia, email, mensaje FROM clientes WHERE idcliente = ?';
    console.log('ID del cliente recibido:', id);
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err); // Debugging
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(results);
    });
};

/*   const nombre = document.getElementById('nombre').value;
          const apellido = document.getElementById('apellido').value;
          const telefono = document.getElementById('telefono').value;
          const direccion = document.getElementById('direccion').value;
          const localidad = document.getElementById('localidad').value;
          const provincia = document.getElementById('provincia').value;
          const email = document.getElementById('email').value;
          const mensaje = document.getElementById('mensaje').value;*/

          const createCliente = (req, res) => {
            const { nombre, apellido, telefono, direccion, localidad, provincia, email, mensaje } = req.body;
            console.log(req.body); // Verifica los datos recibidos
            const sql = 'INSERT INTO clientes (nombre, apellido, telefono, direccion, localidad, provincia, email, mensaje) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            db.query(sql, [nombre, apellido, telefono, direccion, localidad, provincia, email, mensaje], (err, result) => {
                if (err) throw err;
                res.json({ message: 'Cliente creado', clienteId: result.insertId });
            });
        };

const updateCliente = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, telefono, direccion, localidad, provincia, email, mensaje } = req.body;
    const sql = 'UPDATE clientes SET nombre= ?, apellido= ?, telefono= ?, direccion= ?, localidad= ?, provincia= ?, email= ?, mensaje= ?,  WHERE idcliente = ?';
    db.query(sql, [nombre, apellido, telefono, direccion, localidad, provincia, email, mensaje,id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'cliente actualizado' });
    });
};

const deleteCliente = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM clientes WHERE idcliente = ?'; 
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Cliente eliminado' });
    });
};

// const getAllProductos = (req, res) => {
//     const sql = 'SELECT categorias.nombre,categorias.detalle, productos.idporducto,productos.nombre,precio,imagen FROM productos JOIN categorias USING (idcategoria) ORDER BY categorias.nombre,productos.idporducto';
//     db.query(sql, (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// };
const getAllProductos = (req, res) => {
    const sql = 'SELECT categorias.nombre AS categoria, categorias.detalle, productos.idproducto AS idproducto, productos.nombre AS producto, precio, imagen FROM productos JOIN categorias USING (idcategoria) ORDER BY categorias.nombre';
    db.query(sql, (err, results) => {
        if (err) throw err;
        
        // Reestructurar los resultados
        const groupedResults = results.reduce((acc, row) => {
            if (!acc[row.categoria]) {
                acc[row.categoria] = {
                    detalle: row.detalle,
                    productos: []
                };
            }
            acc[row.categoria].productos.push({
                idproducto: row.idproducto,
                nombre: row.producto,
                precio: row.precio,
                imagen: row.imagen
            });
            return acc;
        }, {});

        res.json(groupedResults);
    });
};

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
    getAllProductos
};
