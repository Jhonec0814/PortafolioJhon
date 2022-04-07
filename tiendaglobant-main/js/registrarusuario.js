// 0. Importo librería de autenticación
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"


// 1. Para registrar a una persona en su app
let botonRegistro =document.getElementById("botonregistro")

//1.1 referencia(variable) global a la ventana modal
let modalRegistro = new bootstrap.Modal(document.getElementById('modallogin'))


let botonLogin = document.getElementById("botonlogin")

let modalLogin = new bootstrap.Modal(document.getElementById('modallogin'))

let mensajeRegistro = document.getElementById("mensajeregistro")
let mensajeLogin = document.getElementById("mensajelogin")




botonRegistro.addEventListener("click",function(event){
    // esto es para preevenir la accion de defecto de reiniciar la pagina
    event.preventDefault()
    
    // obtenemos el valor de cada input del formulario
    let email = document.getElementById("emailbox").value
    let password = document.getElementById("passwordbox").value


    //console.log(email,password)
    // Validar el formulario

    
    // Agregar la rutina para llevar los datos firebase
    //(HABLAR CON EL BACK)

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    mensajeRegistro.textContent="Exito en el registro. ¡Bienvenido!"
    modalRegistro.show()
    console.log("todo bien mi pae")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    mensajeRegistro.textContent=`Error: ${errorCode} : ${errorMessage}` 
    modalRegistro.show()
    console.log("error motherfucker :V")
    });



})


botonLogin.addEventListener("click", function(event){
    event.preventDefault()

    let emaillogin = document.getElementById("emailbox").value
    let passwordlogin = document.getElementById("passwordbox").value


    const auth = getAuth();
    signInWithEmailAndPassword(auth, emaillogin, passwordlogin)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    mensajeLogin.textContent="Entrada exitosa. ¡Bienvenido!"
    modalLogin.show()
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    mensajeLogin.textContent=`Error: ${errorCode} : ${errorMessage}` 
    modalLogin.show()
    console.log("error motherfucker :V")
  });

})








