export function verCarrito(carrito) {


    let contenedor = document.getElementById("contenedorCarrito")
    contenedor.innerHTML = ""
    let total = 0,
        totalfinal = 0,
        totalUS = 0,
        totalUSfinal = 0;

    if (carrito.length === 0) {

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.classList.add("w-100")
        imagen.src = "./img/carrito_vacio.png"

    } else {



        carrito.forEach(function (producto) {

            let fila = document.createElement("div")
            fila.classList.add("row")

            let columna1 = document.createElement("div")
            columna1.classList.add("col-12")
            columna1.classList.add("col-md-4")

            let columna2 = document.createElement("div")
            columna2.classList.add("col-12")
            columna2.classList.add("col-md-8")

            let fotoProducto = document.createElement("img")
            fotoProducto.classList.add("img-fluid")
            fotoProducto.classList.add("w-100")
            fotoProducto.src = producto.imagen

            let nombreProducto = document.createElement("h4")
            nombreProducto.textContent = producto.nombre

            let precioProducto = document.createElement("h5")
            precioProducto.textContent = producto.precio

            let cantidadProducto = document.createElement("h6")
            cantidadProducto.textContent = producto.cantidad
            cantidadProducto.textContent = producto.cantidad + " Und"

            let separador = document.createElement("hr")
            separador.classList.add("w-150")
            separador.classList.add("mx-auto")
            separador.classList.add("d-block")
            separador.classList.add("text-dark")

            let subtotal = document.createElement("h6")
            subtotal.classList.add("text-center")
            subtotal.textContent = ("Subtotal: ") + ("$") + Intl.NumberFormat("de-De").format(producto.cantidad * producto.precio)

            total = total + (Number(producto.precio) * Number(producto.cantidad))



            // Padres e hijos

            columna1.appendChild(fotoProducto)
            fila.appendChild(columna1)
            fila.appendChild(columna2)
            columna2.appendChild(nombreProducto)
            columna2.appendChild(precioProducto)
            columna2.appendChild(cantidadProducto)
            columna2.appendChild(subtotal)
            columna2.appendChild(separador)
            contenedor.appendChild(fila)

        })

        totalfinal = document.createElement("h5")
        totalfinal.textContent = total
        totalfinal.classList.add("text-center")
        contenedor.appendChild(totalfinal)



        let botonUS = document.getElementById("priceus")
        botonUS.addEventListener("click", function () {

            totalUSfinal

            totalUS = 0

            carrito.forEach(function (producto) {

                totalUS = total + (Number(producto.precio) * Number(producto.precio))

                totalUSfinal = total / 4000
                console.log(totalUS)

                botonUS.textContent = totalUSfinal + ("USD")



            })
        })

    }
}