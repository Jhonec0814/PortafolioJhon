export function agregarCarrito(carrito){

    // crear una referencia a la pildora del carrito 

    let pildora = document.getElementById("pildora")

    pildora.classList.remove("invisible")

    
    let cantidad=0

    

    carrito.forEach(function(producto){

        cantidad = cantidad+Number(producto.cantidad)

        
    })

    pildora.textContent=cantidad
    pildora.classList.remove("invisible")


    // Rutina para recorrer el carrito y sumar las cantidades de cada producto

  

    
    

}