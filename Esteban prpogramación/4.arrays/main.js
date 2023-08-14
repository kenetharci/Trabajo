'use strict';       
//declarar un arreglo
const myarray = [2,4,6,7,8,9,'3',true];
let myarray2 = new Array ('1','2','3','4','5','6','7');
//for normal
for(let i = 0; i < myarray.length; i++){
    console.log(myarray1[i]);
}
//for in y for of
for(let i in myarray2){
    console.log(myarray2[i]);
}
for(let j of myarray2){
    console.log(j);
}
//for each

myarray1.forEach(e =>  {
    console.log(e);
});