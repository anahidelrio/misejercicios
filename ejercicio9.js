/* Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima el promedio y la
    palabra “aprobado” si el alumno tiene un promedio mayor o igual que 5, y la palabra “no aprobado”
    en caso contrario.*/


const prompt = require("prompt-sync")({ sigint: true });

let nota1 = Number(prompt("introduce Nota 1="));
let nota2 = Number(prompt("introduce Nota 2="));
let nota3 = Number(prompt("introduce Nota 3="));
let nota4 = Number(prompt("introduce Nota 4="));
let nota5 = Number(prompt("introduce Nota 5="));

let suma = (nota1 + nota2 + nota3 + nota4 + nota5);
console.log (`Su nota media es: ${suma / 5}`);



//esta perfecto!