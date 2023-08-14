/**3. Realizar la suma de n números ingresados por el usuario. Julian Andres Moreno Rodriguez, Jairo Fabian martinez */
// Suma de n números.

let n = parseInt(prompt("Ingrese la cantidad de números a sumar:"));
let suma = 0;

for (let i = 0; i < n; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    suma += numero;
}

// Mostrar el resultado.
console.log("La suma de los " + n + " números ingresados es: " + suma);
