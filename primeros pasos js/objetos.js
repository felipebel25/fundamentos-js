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

//Primera manera meh
// function imprimirNombreMayus(nombre)
// {
//     nombre = nombre.nombre.toUpperCase();
//     console.log(nombre);
// }

// imprimirNombreMayus(felipe);


//2da forma mas interesante para mi mas facil 
// function imprimirNombreMayus(persona)
// {
//     var persona= persona.nombre.toUpperCase();
//     console.log(persona);
// }
// imprimirNombreMayus(lina);

//3ra forma algo menos entendible sin embargo se me hace lo mas pro ({nombre}) accedemos al objeto nombre: lina
function imprimirNombreMayus({nombre})
{
    console.log(nombre.toUpperCase())
}

imprimirNombreMayus(lina);
//se puede crear asi creamos una nueva var con un objeto nombre el cual es luis solo funciona si es nombre:luis ya que asi lo dice el parametro
imprimirNombreMayus({nombre:'luis'})