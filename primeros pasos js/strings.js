console.log("hola mundo");
//para declarar una variable ponemos o definida existe pero no tiene un valor 
// var nombre
var nombre='felipe',apellido = 'Medina'

//para poner en mayuscula usar 
var nombreenMayus = nombre.toUpperCase();

//para poner en minuscula usar 
var apellidoenmin = apellido.toLowerCase();

//saber una letra en especifico
var primeraLetradenombre = nombre.charAt(0);

//saber la cantidad de letras 
var cantidaddeletrasnombre = nombre.length

// var nombrecompleto = nombre + ' ' + apellido

//se puede anidar asi se llaman comillas invertidas
var nombrecompleto= `${nombre} ${apellido.toUpperCase()}`

// var str = nombre.charAt(0) +nombre.charAt(2);

//para saber o mostrar un numero especifico de letras (inicio, final) (f, e)
var str = nombre.substr(0,2);

var ultimaletraminombre = nombre.charAt(5);