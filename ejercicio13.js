/*Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el
    perímetro y la superficie del mismo.
    Superficie= base*altura
    Perímetro = 2*(base + altura)
    Comprobar los resultados con varios datos de entradas diferentes*/

    const prompt = require("prompt-sync")({ sigint: true });

    let A = Number(prompt("Base"));
    let B = Number(prompt("Base"));
console.loge(`el perimetro mide ${2*A+2*B} la base mide ${A*B}`)
   
