const API_URL =  'https://swapi.dev/api/'
 const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

 function obtenerpromesa(id){
     return new Promise((resolve, reject)=>{
         const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`


         $.get(url,opts,function(data){
             resolve(data)
         })
         .fail(() => reject(id))
     })
 }
 function onError(id)
 {
     console.log(`Hay error en ${id}`);

 }
 async function obtenerpersonas()
 {
    var ids = [1,2,3,4,5,6,7,8]

    var promesas = ids.map(id => obtenerpromesa(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
        
    } catch (id) {
        onError(id)
        
    }
    Promise
    .all(promesas)
    .catch(onError)
    
 }
   obtenerpersonas()