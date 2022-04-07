export function pintarCanciones(resultado){

let contenedorCanciones = document.getElementById("contenedorCanciones")

    contenedorCanciones.innerHTML=""

    resultado.tracks.forEach(function(cancion){

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    tarjeta.classList.add("bg-dark")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-60")
    imagen.classList.add("p-4")
    imagen.src = (cancion.album.images[0].url)

    let separador = document.createElement("hr")
    separador.classList.add("w-75")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")
    
    let nombre = document.createElement("h5")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("text-white")
    nombre.textContent = cancion.name

    let preview = document.createElement("audio")
    preview.classList.add("text-center")
    preview.setAttribute("controls","controls")
    preview.classList.add("w-100")
    preview.src = cancion.preview_url
    

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(preview)

    columna.appendChild(tarjeta)
    contenedorCanciones.appendChild(columna)

    })
}