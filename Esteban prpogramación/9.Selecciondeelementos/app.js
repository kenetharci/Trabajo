//selección de elementos por id
const seccion1 = document.getElementById ("sec1");
console.log (seccion1);
//selección de elementos por class
const mainContainer = document.getElementByClassName ('container_main');
console.log (mainContainer);
//seleccion de elementos por name
const articulo = document.getElementByName('articulo');
//seleccion de elementos por id con queryselector
const seccion2 = document.querySelector('#sec2');
console.log (seccion2);
//seleccion por etiqueta
const titulo = document.querySelector('h1');
console.log (titulo);
//seleccion por class
const seccion2Class= document.querySelector('.seccion2');

const reciboDato = ()=>{
    const text = document.querySelector ('#nombre').value;
    console.log (text);
}