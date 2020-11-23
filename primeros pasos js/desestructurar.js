var felipe =
{
    nombre: 'Felipe',
    apellido:'Medina',
    edad:16,
}
var lina = 
{
    nombre: 'Lina',
    apellido: 'Ospina',
    edad: 18,
}
//se declara var diciendo hey soy tal objeto de esta varible se necesitan las llaves
function imprimirNombreMayus(obj)
{
    var {nombre} = obj
    var {edad} = obj
    
    console.log('hola soy ' + nombre.toUpperCase() + ' y tengo '+ edad+ ' años')
}

imprimirNombreMayus(lina);

imprimirNombreMayus(felipe);