'use strict';
//Declarar un areglo
const myArray1 =[2,4,6,7,8,9, '3', true];
let myArray2 = new Array('1', '8', 3,4,15,6,7);
for (let i=0; i<myArray1.length; i++){
    //console.log(myArray1[i]);
}

// for un y for of
for(let i in myArray2){
    console.log(myArray2[i]);
}
for(let j of myArray2){
    console.log(j);
}

// forEach

myArray1.forEach(e => {
    console.log(e);
});