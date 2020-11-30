class People{
    constructor(nombre,apellido,altura)
    {
    this.nombre = nombre;
    this.apellido=apellido;
    this.altura =altura;
    return this;
    }
    saludar(fn)
    {
        var nombre = this.nombre
        var apellido= this.apellido
        console.log(`Hola soy ${nombre} ${apellido}`)
        if(fn)
        {
            fn(nombre,apellido)
        }
    }
    esAlto()
    {
        (this.altura >=1.8)?console.log(`Soy ${this.nombre} y soy alto`): console.log(`Soy ${this.nombre} y no soy alto`);
    }
}
class Desarrolador extends People
{
    //de esta forma heredo los atributos de persona a desarrolador y podria agregar es mas entendible :D
    constructor(nombre,apellido,altura)
    {
        super(nombre,apellido,altura)
        
    }
    saludar(fn)
    {
        var nombre = this.nombre
        var apellido= this.apellido
        console.log(`Hola soy ${nombre} ${apellido} y soy desarrollador`)
        if(fn)
        {
            fn(nombre,apellido,true)
        }
    }


}
var lina = new People("lina","ospina",1.75)
var felipe = new Desarrolador("felipe","medina",1.8)

const responderSaludo =(nombre,apellido,esDev)=>
{
    console.log(`Hola ${nombre} `)
    if(esDev=== true)
    {
        console.log(`hola ${nombre} eres dev`)
    }
}

felipe.saludar(responderSaludo)
lina.saludar(responderSaludo);
