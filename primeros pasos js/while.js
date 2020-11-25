var felipe =
{
    nombre: "felipe",
    edad:16,
    peso:55,
}

console.log(`Al inicio de año ${felipe.nombre} tiene ${felipe.peso}`);

const INCREMENTO_DE_PESO = 0.3;
const DIAS_DEL_AÑO = 365;
const AUMENTAR_DE_PESO = (persona, increment)=> persona.peso += INCREMENTO_DE_PESO;
const ADELGAZAr_DE_PESO = (persona, increment)=> persona.peso -= INCREMENTO_DE_PESO;
const comeMucho = () => Math.random() <0.3
const realizaDeporte = () =>Math.random()< 0.4


var dias = 0;
const META = felipe.peso -3;

//si esta condicion no se cumple no sirve el while
while(felipe.peso > META){
   debugger
    
    if(comeMucho())
    {
        AUMENTAR_DE_PESO(felipe);

    }
    if (realizaDeporte())
    {
        ADELGAZAr_DE_PESO(felipe);
    }

    dias += 1;

}



console.log(`${felipe.nombre} adelgazo ${felipe.peso.toFixed(2)}kg  en ${dias} dias.`);