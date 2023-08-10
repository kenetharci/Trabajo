'use strict';
//1. Pedir dos numeros positivos y realizar una suma, retornar el valor
//ds: suma
//ds: son 2 numeros, positivos

let numero1 = parseFloat(prompt('Dame el primer valor:'));
let numero2 = parseFloat(prompt('Dame el segundo valor:'));

alert(numero1 + numero2);

const sumar = (num1, num2) =>{
    const response = (num1>0 && num2 >0)? num1+num2: "No se puede realizar la suma";
    return response;
}