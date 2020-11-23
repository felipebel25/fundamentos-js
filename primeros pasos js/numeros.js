var edad = 16;

// edad = edad +1 cumpleaños
//es lo mismo incrementa
edad += 1;

var peso = 75

//peso = peso -2
//lo mismo 
peso -= 2;

var sandwich = 1;


//peso = peso + sandwich;
peso += sandwich;

var jugarfutbol= 3;

//peso = peso - jugarfutbol;
peso -= jugarfutbol;

var preciovino = 200.3;

//var total = preciovino *100 = 600.9000000000001
var total = preciovino *100 * 3 /100;

var totalredon = Math.round( preciovino*100 * 3)/100;

//vuelve num a string y .tofixed(2) indicamos que cojemos dos decimales
var totalstr = total.toFixed(2);

//vovler string a num esto es igual a 600.9
var totalnum = parseFloat(totalstr);

//divisiones

var pizza = 8;
var personas = 2;

//divide con / esto daria 4 
var porcionessxpersonas = pizza / personas;


//js no almacena decimales tan precisamente 

