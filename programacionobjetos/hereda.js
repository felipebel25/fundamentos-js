function Heredade(hijo,padre)
{
    var fn= function(){};
    fn.prototype = padre.prototype
    hijo.prototype= new fn
    hijo.prototype.constructor= hijo 
}

function People(nombre,apellido,altura)
{
    this.nombre = nombre;
    this.apellido=apellido;
    this.altura =altura;
    return this;
}
function Desarrollador(nombre,apellido)
{
    this.nombre=nombre;
    this.apellido=apellido;
    return this;
}


Heredade(Desarrollador,People);
const esAlto= 1.8;

People.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}
Desarrollador.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy admin`)
}

People.prototype.esAlto = function ()
{
   (this.altura >=1.8)?console.log(`Soy ${this.nombre} y soy alto`): console.log(`Soy ${this.nombre} y no soy alto`);
};
 
var lina = new People("lina","ospina",1.75)
var felipe = new People("felipe","medina",1.8)
var felpa = new Desarrollador("felipe","medina");
felipe.saludar();
felipe.esAlto();
lina.esAlto();
felpa.saludar();
