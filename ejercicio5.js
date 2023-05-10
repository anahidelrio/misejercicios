//Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo,
//negativo o nulo.

const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("introduce un Número:"));

if (A>0) {
    console.log(`${A} es positivo`);
}
else if (A<0) {
    console.log(`${A} es negativo`);
}
else {
    console.log(`${A} es nulo`);
}

