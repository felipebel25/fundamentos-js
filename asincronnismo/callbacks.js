const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}



function traedatos(id,callback)
{
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
   
    $.get(url,opts,callback).fail(function(){
        console.log(`error en ${id}`)
    })
}


traedatos(5,function(personaje){
         console.log(`hola soy ${personaje.name}`)
            traedatos(1,function(personaje)
            {
                console.log(`hola soy ${personaje.name}`)
            })
    
        
        
}) 
 

    

