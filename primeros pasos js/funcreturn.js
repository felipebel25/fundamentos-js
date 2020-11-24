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

const MAYOR_DE_EDAD = 18;


const MAYORIA_DE_EDAD = (persona) =>
{
   return persona.edad >= MAYOR_DE_EDAD;
   
}

const cedula =(persona) =>{
    if(MAYORIA_DE_EDAD(persona))
    {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} no es mayor de edad`)
    
    }
}
cedula(lina);
cedula(felipe);

