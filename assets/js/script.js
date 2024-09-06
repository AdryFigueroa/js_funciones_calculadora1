// Función para agregar números al input
function agregarNumero(numero) {
  let inputElemento = document.getElementById("resultado");
  let valorInputActual = inputElemento.value;

  // Si el valor actual es 0, reemplaza el 0 por el nuevo número
  if (valorInputActual === "0") {
    inputElemento.value = numero.toString();
  } else {
    inputElemento.value = valorInputActual + numero.toString();
  }
}

// Función para agregar operadores
function operar(parametro) {
  let inputElemento = document.querySelector("#resultado");
  let valorInputActual = inputElemento.value;
  inputElemento.value = valorInputActual + parametro;
}

function agregarDecimal() {
    if (!valorActual.includes('.')) {
      valorActual += '.';
    }
    document.getElementById('resultado').value = valorActual;
  }

// Función para limpiar el input
function limpiar() {
  let inputElemento = document.querySelector("#resultado");
  inputElemento.value = "0";
}

// Función para calcular el resultado
function calcular() {
  let inputElemento = document.querySelector("#resultado");
  let valorInputActual = inputElemento.value;

  // Calcula el valor usando eval() y actualiza el input con el resultado
  let resultado = eval(valorInputActual);
  inputElemento.value = resultado;
}
