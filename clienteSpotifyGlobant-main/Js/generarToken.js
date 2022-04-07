export async function generarToken(){

    let URI="https://accounts.spotify.com/api/token"
    let client_id="client_id=a1409ae3af71402596667ec7705061af"
    let client_secret="client_secret=90d68f80cb2f4cae9ca5318d7e5c2704"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }

    let respuesta = await fetch(URI,parametros)
    let respuestaFINAL = await respuesta.json()

    
   // console.log(respuestaFINAL.token_type+" "+respuestaFINAL.access_token)
   let token=respuestaFINAL.token_type+" "+respuestaFINAL.access_token
    return(token)
    


    /*fetch(URI,parametros)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })*/

}

generarToken()
/*export async function generarToken(URI,TOKEN){

    let parametros={
        method:"POST",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=respuesta.json()

    return(respuestaFINAL)

}*/