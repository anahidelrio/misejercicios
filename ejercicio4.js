// 4.  Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, debe imprimir el
//producto de los tres y si no lo es, imprimirá la suma.
const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("introduce la variable A: "));
let B = Number(prompt("introduce la variable B: "));
let C = Number(prompt("introduce la variable C: "));

if (A<0) {
    console.log(`el producto es ${A*B*C}`);
} 
else 
{
    console.log(`la suma es ${A+B+C}`);
}
