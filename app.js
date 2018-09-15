const argv = require('./config/yargs').argv,
      porHacer = require('./por-hacer/por-hacer'),
      colors = require('colors')

console.log(argv)


let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
    break

    case 'listar':
        let listado = porHacer.getListado();
        listado.forEach(e => {
            console.log('========Por Hacer========'.green);
            console.log(e.descripcion);
            console.log('Estado: ', e.completado );
            console.log('=========================='.green);
        });
        console.log('Mostrar todas las tareas por hacer');
    break

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
    break

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado)
    break

    default:
        console.log('No se reconoce el comando');
}

