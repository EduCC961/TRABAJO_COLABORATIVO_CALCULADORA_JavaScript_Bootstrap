// Variable para que se guarde el número que se va a escribir
let numeroEscrito = "";

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