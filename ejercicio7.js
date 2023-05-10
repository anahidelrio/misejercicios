//ejercicio 7 //
//Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado //
//calcule e imprima el cambio que se debe entregar al cliente //


const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("Introduce el precio del producto:"));
let B = Number(prompt("Introduce la cantidad de dinero entregado:"));


if (B>=A)
{
    console.log(A-B)
}
else if (B<A) {
    console.log("Falta dinero")
}

