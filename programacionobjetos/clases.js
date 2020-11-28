class People{
    constructor(nombre,apellido,altura)
    {
    this.nombre = nombre;
    this.apellido=apellido;
    this.altura =altura;
    return this;
    }
    saludar()
    {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
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
    saludar()
    {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`)
    }


}
var lina = new People("lina","ospina",1.75)
var felipe = new Desarrolador("felipe","medina",1.8)
felipe.saludar()
lina.saludar();
