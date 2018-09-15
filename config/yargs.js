const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default:  true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}


const argv = require('yargs')
            .command('crear','Creyaar un elemento por hacer',{
                descripcion
            })
            .command('actualizar','Actualiza el estado completado de una tarea',{
                descripcion,
                completado
            })
            .command('listar','Muestra todas las tareas',{
                filtrar : {
                    alias: 'f',
                    desc: 'Muestra tareas'
                }
            })
            .command('borrar', 'Borra una tarea',{
                descripcion
            })
            .help()
            .argv

module.exports = {
    argv
}