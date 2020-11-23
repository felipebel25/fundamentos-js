var nombre  = 'Felipe';

//aqui accedemos solo a la variable nombre asignada anteriormente
// function imprimirNombreMayus()
// {
//     nombre= nombre.toUpperCase();
//     console.log(nombre);
// }

// imprimirNombreMayus();


//Aca el parametro es otro mundo distinto al globla la variable nombre no tiene nada que ver con la var nombre dentro de la funcion esto no lo permite hacer javascript 
function imprimirNombreMayus(nombre)
{
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMayus(nombre);
imprimirNombreMayus("Luis");