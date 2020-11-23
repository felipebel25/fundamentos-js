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
//el poder de crear una nueva variable es con return de esta forma no se ve modificada el objeto original
function cumpleanos(persona)
{
    return{
        ...persona,
        edad:persona.edad +1
    }
}

function imprimirNombreMayus(persona)
{
    var {nombre} = persona;
    var{edad} = persona;

    console.log('Hola soy ' + nombre + ' y tengo '+ edad);
}

imprimirNombreMayus(lina)
imprimirNombreMayus(felipe)