const express = require('express'); 
const app= express(); 
const port = 3000;
const tareas = require('./tareas');

app.get('/', (req,res) => {
    res.send('Bienvenido a la API de tareas!');
}); 

app.listen(port, () =>{
    console.log('Servidor escuchando en http://localhost:${port}');
});

//Middleware para procesar JSON
app.use(express.json());

//Ruta para obtener todas las teras
app.get('/api/tareas', (req,res) => {
    //Aquí irá la lógica para obtener todas las tareas
    res.json(tareas.obtenerTareas());
});
//Ruta para crear una nueva tarea
app.post('/api/tareas', (req, res) => {
    const nuevaTarea = req.body;
    const tarea = tareas.crearTarea(nuevaTarea);
    res.status(201).json(tarea);
});

//Ruta para actualizar una tarea
app.put('/api/tareas/:id', (req, res) =>{
    const id = req.params.id;
    const datosActualizados = req.body;
    const tareaActualizada = tareas.actualizarTarea(id, datosActualizados);
    if(tareaActualizada){
        res.json(tareaActualizada);
    }else{
        res.status(404).json({mensaje: 'No se encontró la tarea ${id}'});
    }
});

//Ruta para eliminar una tarea
app.delete('/api/tareas/:id', (req, res) =>{
    const id = req.params.id;
    const tareaEliminada = tareas.eliminarTarea(id);
    if(tareaEliminada){
        res.json({mensaje: 'Tarea ${id} eliminada'});
    }else{
        res.status(404).json({ mensaje: 'No se encontró la tarea ${id}'});
    }
});