let cardsArtistas=document.getElementById("cardArtistas")
cardsArtistas.addEventListener("click",function(event){

    console.log(event.target)

    if(event.target.classList.contains("card-img-top")){
        let artistaSeleccionado=(event.target.id)

        window.location.href=(`./artistas.html?id=${artistaSeleccionado}`)
    }    
})









//////////////////////////////////////////


/*let card = document.getElementById("artista")
card.addEventListener("click",function(event){
event.preventDefault()

    let artistaChoose = document.getElementById("artista").value

    let URI = generarURI(artistaChoose)

    async function activarAPI(){

        let token=await generarToken()
        console.log(token)

        let resultado= await consumirAPI(URI,token)
    
        console.log(resultado)
        pintarCanciones(resultado)
        }
        
        activarAPI()
        cards.innerHTML=""


})

let cards = document.getElementById("contenedorCanciones")*/


///////////

/*let boton = document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let artistaSeleccionada = document.getElementById("artista").value
    

    let URI = generarURI(artistaSeleccionada)
    
    

    async function activarAPI(){

    let token=await generarToken()
        console.log(token)

    let resultado= await consumirAPI(URI,token)

    console.log(resultado)
    pintarCanciones(resultado)
    }
    
    activarAPI()
    cards.innerHTML=""
})*/






