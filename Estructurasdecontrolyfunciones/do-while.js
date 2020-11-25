console.log("hola")

var contador = 0;
var llueve = ()=> Math.random() <0.25;

do {
    contador++;
} while (!llueve());  

console.log(`fui a ver si llovia  ${contador} ${contador>1?"veces":"vez"}`)