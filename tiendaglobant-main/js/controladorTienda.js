//Importaciones
import { llenarTienda } from "./llenadoTienda.js"
import { ampliarInfoProducto } from "./ampliarInfoProducto.js"
import { agregarCarrito } from "./agregarAlCarrito.js"
import {verCarrito} from "./verCarrito.js"


//VARIABLES GLOBALES DE LA TIENDA
let producto={}
let carrito=[]


//llamo a la funcion llenartienda
llenarTienda()

//llamo a la funcion ampliarinfoProducto

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))

let listaProductos = document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    producto=ampliarInfoProducto(event)
    if (event.target.classList.contains("btn")){
        modalInfoProducto.show()
    }
    

})

//Llamo a la funcion agregarAlCarrito

let botonAgregarCarrito=document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click",function(){
    
    let cantidadProducto = document.getElementById("cantidadProducto").value 
    producto.cantidad=cantidadProducto

    //agrego el producto al carrito
    carrito.push(producto)
    

    //oculto la modal de info producto
    modalInfoProducto.hide()

    //llamar la funcion agregarCarrito
    agregarCarrito(carrito)
  

    cantidadProducto = document.getElementById("cantidadProducto").value=1 
    
})


// llamo a la funcion ver carrito
let botonVerCarrito = document.getElementById("botonCarrito")
let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))
botonVerCarrito.addEventListener("click",function(){
    verCarrito(carrito)
    modalVerCarrito.show()
})



// detectar clic en el boton limpiar - Funcion limpiar

let botonLimpiar = document.getElementById("clean")
botonLimpiar.addEventListener("click",function(){

    let contenedorModal = document.getElementById("contenedorCarrito")

    contenedorModal.innerHTML=""
    carrito = []

    let pildora = document.getElementById("pildora")
    pildora.innerHTML=""
    pildora = []

    let totaluslimpiar = document.getElementById("priceus")
    totaluslimpiar.innerHTML="$Buy in Usd!"
    totaluslimpiar = []
    
    modalVerCarrito.hide()

})


    
   














