var felipe =
{
    nombre: "felipe",
    edad:16,
    peso:55,
}

console.log(`Al inicio de año ${felipe.nombre} tiene ${felipe.peso}`);

const INCREMENTO_DE_PESO = 0.2;
const DIAS_DEL_AÑO = 365;
const AUMENTAR_DE_PESO = (persona, increment)=> persona.peso += INCREMENTO_DE_PESO;
const ADELGAZAr_DE_PESO = (persona, increment)=> persona.peso -= INCREMENTO_DE_PESO;

for(var i=1 ; i<=DIAS_DEL_AÑO; i++)
{
    var random =Math.random()
    if (random<0.25)
    {
        AUMENTAR_DE_PESO(felipe);

    }else if (random<0.5)
    {
        ADELGAZAr_DE_PESO(felipe);

    }
}

console.log(`Al final de año ${felipe.nombre} tiene ${felipe.peso.toFixed(2)}`);