// Consumir los recursos del API
export async function consumirAPI(URI, TOKEN){

    const PARAMETROS_PETICION = {

        method:"GET", 
        headers:{ Authorization:TOKEN }
    
    }


    let respuesta = await fetch(URI,PARAMETROS_PETICION)
    let canciones = respuesta.json()
    return(canciones) 
}


