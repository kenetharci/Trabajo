'use strict'
function capturarNumeros() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    
    let numeros = [];
    
    for (let i = 0; i < cantidad; i++) {
      let numero = parseInt(window.prompt("Ingrese el número " + (i+1)));
      if (isNaN(numero)) {
        window.alert("Por favor, ingrese un número válido.");
        i--;
      } else {
        numeros.push(numero);
      }
    }
    
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    
    document.getElementById("mayor").innerHTML = "El número mayor es: " + mayor;
    document.getElementById("menor").innerHTML = "El número menor es: " + menor;
  }