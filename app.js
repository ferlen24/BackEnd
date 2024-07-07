// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// src/routes/routers-cliente.js
const clienteRoutes = require('./src/routes/routes-cliente');


//app.use(express.json());
app.use('/clientes', clienteRoutes);

app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/public/html/index.html')
})
app.get('/carta.html',(req,res)=>{
    res.sendFile(__dirname + '/public/html/carta.html')
})

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`El servidor esta encendidor en http://localhost:${PORT}/ `)
});
