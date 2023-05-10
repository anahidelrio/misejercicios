//Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de sueldo del 15%
//si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.


const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("introduce tu sueldo:"))

if (A<1000)
{
    console.log (A * 1.15)
}
else 
{
    console.log(A)
}

