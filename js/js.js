"use strict";


//defino el valor aleatorio,lo guardo como una constante y lo muestro en el HTML
const captcha = document.getElementById("naleatorio").innerHTML = Math.floor((Math.random() * 10000) + 1);
document.getElementById("botonComprobar").addEventListener("click", comprobar);


function comprobar() {
    let validacion = document.getElementById("validacion");
    //Cuando se hace click en "comprobar", guardo el valor ingresado en la variable "numero"
    let numero = document.getElementById("IngresarNumero").value;
    //comparo lo que se ingreso con el Nª generado aleatoriamente y defino cada caso
    if (numero == captcha) {
        validacion.innerHTML = "¡Eres Humanx!";
        validacion.classList.add("ResultadoPositivo");
        validacion.classList.remove("ResultadoNegativo");
        let div = document.getElementById('enviar');
        div.classList.remove("oculto");
    } else {
        validacion.innerHTML = "¡Intenta de vuelta!";
        validacion.classList.add("ResultadoNegativo");
        validacion.classList.remove("ResultadoPositivo");
        let div = document.getElementById('enviar');
        div.classList.add("oculto");
    }
}

document.getElementById("enviar").addEventListener("click", mensaje);

function mensaje() {
    alert("Muchas gracias, su formulario fue registrado")
}