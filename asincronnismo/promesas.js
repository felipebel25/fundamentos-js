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

 obtenerpromesa(1)
   .then(personaje1 =>{
       console.log(personaje1.name)
       return obtenerpromesa(2)
   })
   .then(personaje2=>
   {
       console.log(personaje2.name)
       return obtenerpromesa(3)
   })
   .then(personaje3=>
    {
        console.log(personaje3.name)
        return 
    })
  
   .catch(onError)

   .then(luke => console.log(luke.name))

   console.log('Sacha')