const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('./db/data.json',data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {

    try {
        
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

}
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false

    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer
}

const getListado = (complete) => {
    cargarDB()
    if(complete == null) return listadoPorHacer
    
    let nuevoCompletas = listadoPorHacer.filter(tarea => tarea.completado === complete)
    console.log(nuevoCompletas);
    return nuevoCompletas
   

   }
// let listadoPorHacer.filter(tarea => {
//     if(tarea.completado){}
// })


const actualizar = (descripcion, completado = true) => {
    cargarDB()

        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion
        })

    if (index >=0 ) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true
    } else {
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB()
    
        nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
        if ( listadoPorHacer.length === nuevoListado.length){
            return false
        } else {
            listadoPorHacer = nuevoListado
            guardarDB()
            return true
        }


    
    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}