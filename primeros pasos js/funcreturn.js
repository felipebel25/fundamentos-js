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


const MAYORIA_DE_EDAD = ({edad})=> edad >= MAYOR_DE_EDAD

const MENOR_DE_EDAD =({edad}) => edad <= MAYOR_DE_EDAD

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

const permitiracceso = (persona) =>
{
    (!MAYORIA_DE_EDAD(persona))?
    console.log("acceso denegado"):
    console.log("acceso aprobado");
  
 
}

permitiracceso(lina)
permitiracceso(felipe)