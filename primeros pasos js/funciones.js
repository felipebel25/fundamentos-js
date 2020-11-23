var nombre = 'felipe',edad='28'

//imprimiriamos solo las variables que tenemos asignadas como nombre y felipe por que la funcion esta sin parametros
// function imprimiredad()
// {
//     console.log(`${nombre} tienes ${edad} años`)
// }
// imprimiredad();

function imprimiredad(n,e)
{
    console.log(`${n} tienes ${e} años`)
}

imprimiredad(nombre,edad);
imprimiredad("lina",18);
imprimiredad("max", 3);
//javascript es indistinto a estos errores tenemos que tener en cuenta javascript debilmente tipado
imprimiredad(12,"niño")