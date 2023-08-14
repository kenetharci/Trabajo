'use strict';
//1.funcion clasica
function sumar(num1,num2){
    return num1 + num2;
}
//invocacion de la funcion
let respuesta =sumar(4,6);
console.log(respuesta);
console.log(sumar(3,8));
//2.funcoiin tipo flecha
const restar = (num1,num2) => {
    return (num1-num2);
}
console.log(restar(14,6));