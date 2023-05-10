// Ejercicio 2 crear un array de pueblos 5 recorrer el array e ir mostrando los pueblos pares
// Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.
const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("introduce la variable A:"))
let B = Number(prompt("introduce la variable B:"))

if (isNaN(A)) {
    console.log("A no es número");
} 
else if (isNaN(B)) {
    console.log("B no es un número");
} 
else {
    console.log (`la suma es ${A + B}`);
    console.log (`la resta es ${A - B}`);
    console.log (`la multiplicación es ${A * B}`);
    console.log (`la división es ${A / B}`);
}

