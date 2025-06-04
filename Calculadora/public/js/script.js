// Variable para que se guarde el número que se va a escribir
let numeroEscrito = "";
let numero1 = "";
let operacion = "";

//Cuando se presione un número se llama a esta función
function mostrarEnPantalla(valor) {
    numeroEscrito = numeroEscrito + valor;
    document.getElementById("display").value = numeroEscrito;
}

// Se crea la función para borrar los numeros en pantalla
function limpiarPantalla() {
    numeroEscrito = ""; // Limpiamos la variable que tiene el numero

    document.getElementById("display").value = ""; // Vaciamos el numero de la pantalla
}

// Esta función se activa cuando se presione +, -, *, /
function seleccionarOperacion(simbolo) {
    numero1 = numeroEscrito; // Se guarda el primer numero
    operacion = simbolo; // Se guarda la operación
    document.getElementById("display").value = ""; // Se limpia la pantalla para poder ingresar el segundo numero
    numeroEscrito = ""; // Con esto se elimina la variable que guarda lo que se escribe
    document.getElementById("operation-display").innerText = "Operacion: " + simbolo; // Se muestra la operación en un texto
}

function calcularResultado() {
    // Convertimos los dos numeros a numero real, por si se ingresa decimales
    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numeroEscrito);
    let resultado = 0;

    //Aqui se revisa que operación se eligió y se hace el cálculo
    if (operacion === "+") {
        resultado = num1 + num2;
    } else if (operacion === "-") {
        resultado = num1 - num2;
    } else if (operacion === "*") {
        resultado = num1 * num2;
    } else if (operacion === "/") {
        //Se evita que se divida por 0
        if (num2 === 0) {
            resultado = "No se puede dividir por 0";
        } else {
            resultado = num1 / num2;
        }
    }

    //Mostramos el resultado en pantalla
    document.getElementById("display").value = resultado;

    // Eliminamos la operación mostrada
    document.getElementById("operation-display").innerText = "";

    //Reiniciamos todo para que se pueda volver a usar
    numeroEscrito = "";
    num1 = "";
    operacion = "";
}