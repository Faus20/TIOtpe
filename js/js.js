"use strict";

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

