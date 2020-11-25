var felipe =
{
    nombre: 'Felipe',
    apellido:'Medina',
    edad:16,
    presidente: true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
}
var lina = 
{
    nombre: 'Lina',
    apellido: 'Ospina',
    edad: 18,
    presidente: false,
    cocinero:true,
    cantante:true,
    dj:false,
    guitarrista:false,
}
//usamos operador condicioanl(ternario) es sencillo 
const imprimirProfesiones = (persona) =>
{
    document.write(`${persona.nombre} es:<br>`);
    
    (persona.presidente === true)?
    (document.write(`${persona.nombre} eres admin<br>`)):
    (document.write(`${persona.nombre} no eres admin f <br>`));
    
    (persona.cocinero === true)?
    (document.write(`${persona.nombre} eres cociner@ <br>`)):
    (document.write(`${persona.nombre} no eres cocinero<br>`));

    (persona.cantante === true)?
    (document.write(`${persona.nombre} eres cantante<br>`))
    :(document.write(`${persona.nombre} no eres cantante<br>`));

    (persona.dj === true)?
    (document.write(`${persona.nombre} eres dj<br>`))
    :(document.write(`${persona.nombre} no eres dj<br>`));

    (persona.guitarrista === true)?
    (document.write(`${persona.nombre} eres guitarrista<br>`))
    :(document.write(`${persona.nombre} no eres guitarrista<br>`));
}

imprimirProfesiones(felipe);
imprimirProfesiones(lina);

const cedula = (persona) =>
{
    var {edad} = persona;
    var {nombre} = persona;
    let mayordeedad= 18;
    (edad >= mayordeedad)?
    (console.log(`${nombre} si eres mayor de edad tienes ${edad}`)):
    (console.log(`${nombre} no eres menor de edad tienes ${edad}`));
}
cedula(lina);
cedula(felipe);