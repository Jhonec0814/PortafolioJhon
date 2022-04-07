import { generarURI } from "./generarArtistas.js"
import {generarToken} from "./generarToken.js"
import {consumirAPI} from "./servicios.js"
import {pintarCanciones} from "./pintarCanciones.js"


let artistaSeleccionado=(window.location.search.split("=")[1])

let URI=generarURI(artistaSeleccionado)

async function activarAPI(){

    

    let token=await generarToken()
    let resultado= await consumirAPI(URI,token)
    pintarCanciones(resultado)
}
    
    activarAPI()
    cards.innerHTML=""
    
    let cards = document.getElementById("contenedorCanciones")   

