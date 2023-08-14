"use strict";

let cadMeses = "ENERO-FEBRERO-MARZO-ABRIL-MAYO-JUNIO";
let myArray = cadMeses.split("-");
console.log(myArray);

//1.Buscar, elementos en un arreglo, sino lo encuentra devuelve undefined
const busqueda = myArray.find((e) => e ==="FEBRERO");
console.log (busqueda);
//2.Buscar indice, sino lo euncuentra devuelve -1
const indice = myArray.findIndex((e) => e==="MAYO");
console.log (indice);
//3.crea un objeto iterable
const array = [3,4,5,6,8,9];
const arrayCuadrados = Array.from(array,(e)=> e * e);
console.log(typeof(arrayCuadrados)); //tipo de dato
console.log(arrayCuadrados);
//4.filtrar
const result = array.filter((e)=> e % 3 ===0);
console.log(result);


