// src/controllers/movieController.js
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
    const sql = 'SELECT * FROM clientes WHERE idcliente = ?';
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

const createCliente = (req, res) => {
    const { nombre,apellido, sexo, fecha_nacimiento,numero_dni,user,pass } = req.body;
    const sql = 'INSERT INTO clientes (nombre, apellido, sexo, fecha_nacimiento,numero_dni,user,pass) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [ nombre,apellido, sexo, fecha_nacimiento,numero_dni,user,pass], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Movie created', movieId: result.insertId });
    });
};

const updateCliente = (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fecha_lanzamiento, director } = req.body;
    const sql = 'UPDATE peliculas SET nombre = ?, apellido = ?,  WHERE idcliente = ?';
    db.query(sql, [titulo,descripcion, fecha_lanzamiento, director,id ], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Movie updated' });
    });
};

const deleteCliente = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM peliculas WHERE id_pelicula = ?'; 
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Movie deleted' });
    });
};

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};
