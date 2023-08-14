'use strict';
//1. pedir 2 numeros positivos y realizar una suma, returnar el valor
//ds:suma
//de:son 2 numeros positivos

let numero1 = parseFloat (prompt('dame el primer valor: '));
let numero2 = parseFloat (prompt('dame el segundo valor:'));
console.log (numero1, numero2);
let suma= sumar(numero1,numero2);
console.log (suma);
alert(suma);

const sumar = (num1, num2) => {
    const response = (num1>0 && num2>0) ? num1+num2 : "no se puede realizar la suma";
    console.log(response);
    return response;
}