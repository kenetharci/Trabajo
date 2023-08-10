/**
 * 1. Calcular el sueldo a pagar de un trabajadaor dado que se debe ingresar la cantidad de horas trabjadas y el valor de la hora en pesos
 * 1. Juan Ruiz
 * 2. Keneth Arciniegas
 */
'use strict';

const multiplicacion =(num1,num2) =>{
    const response = (num1>0 && num2>0) ? num1*num2: "No se puede realizar la suma";
    return response;
}

let valor1 = parseFloat(prompt('Dame Las horas trabajadas:'));
let valor2 = parseFloat(prompt('Dame el valor de una hora trabajada:'));
