// Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales (recuerda
//usar la estructura condicional if). Una vez terminado, haced lo mismo con 3 números diferentes.
const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("introduce la variable A:"));
let B = Number(prompt("introduce la variable B:"));



if (A>B) {
    console.log(`${A} es mayor que ${B}`)
}
else if (B>A) {
    console.log(`${B} es mayor que ${A}`)
}
else {
    console.log("son iguales")
}

let C = Number(prompt("introduce la variable C:"))

if ((A>B) && (A>C))
{
    console.log(`${A} es mayor`)
}
else if ((B>A) && (B>C))
{
    console.log(`${B} es mayor`)
}
else if ((C>A) && (C>B))
{
    console.log(`${C} es mayor`)
}
else {
    ("son iguales")
}

