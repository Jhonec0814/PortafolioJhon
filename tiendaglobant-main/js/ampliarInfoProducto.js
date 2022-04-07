export function ampliarInfoProducto(event) {

     let producto = {}

    if (event.target.classList.contains("btn-outline-dark")) {


        producto = {
            nombre: event.target.parentElement.querySelector("h5").textContent,
            precio: event.target.parentElement.querySelector("h6").textContent,
            imagen: event.target.parentElement.querySelector("img").src,
            descripcion:event.target.parentElement.querySelector("h3").textContent
        }


        let nombreProducto = document.getElementById("nombreProducto")
        nombreProducto.textContent = producto.nombre

        let precioProducto = document.getElementById("precioProducto")
        precioProducto.textContent = producto.precio

        let imagenProducto = document.getElementById("imagenProducto")
        imagenProducto.src = producto.imagen

        let descripcionProducto = document.getElementById("descripcionProducto")
        descripcionProducto.textContent = producto.descripcion


    }

    return (producto)

}