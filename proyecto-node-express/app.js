const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');


// ROUTERS
const routerProgramacion = require('./routers/programacion.js');
app.use('/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/cursos/matematicas', routerMatematicas);


// ROUTING
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos.');
});

app.get('/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});