'use strict';
//creacion de elementos
const seccion = document.createElement('section');

//asignacion de atributos al elemento
seccion.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt optio temporibus repudiandae eligendi totam at sed eveniet excepturi enim esse quisquam sint nisi dolorum a iusto eos quaerat? Deleniti.";
seccion.id = "seccion3";
seccion.setAttribute("name", "seccion3");
seccion.className = "seccion3";
seccion.styles = "color: brown; font-size:26px;"
//insertar el elemento en el DOM
document.body.appendChild(seccion);
const seccion1 = document.getElementById('sec1');
seccion1.appendChild(seccion);
seccion.innerHTML = "<p><strong>Hola me cambiaron</strong></p>";

seccion.textContent = "<p><strong>Hola me cambiaron</strong></p>";

seccion.innerHTML = "<p><strong><i>Hola</i> me cambiaron</strong></p>";