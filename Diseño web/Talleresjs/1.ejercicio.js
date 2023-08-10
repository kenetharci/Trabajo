/**
 * 1. Dado dos numeros ingresados por el usuario realizar las 4 operaciones basicas, suma, resta, multiplicion, division e imprimir las operaciones. Validar la division entre 0(cero)
 * Integrantes:
 * 1. Juan Ruiz
 * 2. Keneth Arciniegas
 */

'use strict';
const sumar =(num1, num2) =>{
    const response = (num1>0 && num2>0) ? num1+num2: "No se puede realizar la suma";
    return response;
}
let numero1 = parseFloat(prompt('Dame el primer valor:'));
let numero2 = parseFloat(prompt('Dame el segundo valor:'));


let suma = sumar(numero1,numero2);
alert("La suma de los dos numeros es:"+suma);


const restar =(num1, num2) =>{
    const response = (num1>0 && num2>0) ? num1-num2: "No se puede realizar la resta";
    return response;
}

let resta = restar(numero1,numero2);
alert("La resta de los dos numeros es:"+resta);

const multiplicion =(num1, num2) =>{
    const response = (num1>0 && num2>0) ? num1*num2: "No se puede realizar la multiplicacion";
    return response;
}

let multiplo = multiplicion(numero1,numero2);
alert("La multiplicacion de los dos numeros es:"+multiplo);


const division =(num1, num2) =>{
    const response = (num1>0 && num2>0) ? num1/num2: "No se puede realizar la division";
    return response;
}

let divi = division(numero1,numero2);
alert("La division de los dos numeros es:"+divi);

const mod =(num1, num2) =>{
    const response = (num1>0 && num2>0) ? num1%num2: "No se puede realizar la division";
    return response;
}

let mo = mod(numero1,numero2);
if(mo==0){
    alert("El mod de los dos numeros es:"+mo);
}else{
    alert("El mod de los dos numeros es:"+mo);
}
