"use strict";
//estructuras de control
let numero1 = 3;
let numero2 = 100;

if (numero1 > 10){
    console.log("es mayor que 10");
}else{
    if (numero1 % 2 == 0){

    }else{

    }
}

//ternario

let respuesta = (numero2 % 10 === 0) ? "es multiplo de 10" : " no es multiplo de 10";
console.log(respuesta);

//switch

let opcion = 3;
switch (opcion){
    case 1:
        console.log("es el numero 1");
        break;
        case 2:
            console.log("es el numero 2");
            break;
            case 3:
                console.log("es el numero 3");
                break;
        default:
            console.log("opcion fuera de rango");
}
//switch por rangos
let nota = 3.5;
switch (true){
    case nota>=0 && nota <3.0:
        console.log("aplazado");
        break;
        case nota >=3.0 && nota <=5.0:
            console.log("aprobado");
            break; 
            default:
                console.log("nota erronea");
}
