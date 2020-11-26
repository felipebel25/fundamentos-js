var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}


var personas = [sacha,alan,martin,dario,vicky,paula];

// const esAlta = (personas) =>
// {
//     return personas.altura > 1.8
// }es igual al codigo de abajo

const esAlta = ({altura}) => altura >1.8;

const esBaja =({altura}) => altura<1.8;

var alturaAlta = personas.filter(esAlta);
var alturaBaja = personas.filter(esBaja);
// var personasaltas = personas.filter(function(persona){
//     return persona.altura > 1.8
// }) esto tambien esta bien poner una funcion el el .filter()
console.log(alturaAlta);
console.log(`Personas bajas:`);
console.log(alturaBaja)