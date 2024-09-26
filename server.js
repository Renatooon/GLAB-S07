const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: false }));

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/Negocio2024', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));

// Rutas
app.use('/clientes', require('./routes/clientes'));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
