'use strict';
//Eventos metodo en la etiqueta
const capturaCLick= ()=>{
    alert('Evento click');
};

const capturaMouseOver= ()=>{
    console.log('Mouse Over');
}

function teclaDown (){
    console.log('presionando tecla');
}

//Generar eventos por propiedad
const foot = document.querySelector('#footer');
foot.oneclick = function(){
    console.log('On click en el footer');
}

//Generar evento por el metoo .addEventListener
const parrafo = document.getElementById('parrafo_1');
parrafo.addEventListener('click', ()=>{
    console.log('click en el parrafo');
})
