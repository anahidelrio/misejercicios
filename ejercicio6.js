//ejercicio 6
//Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
//Pista: para determinar el resto de una división, se usa la operación módulo %.

const prompt = require("prompt-sync")({ sigint: true });

do{ A = Number(prompt("introduce la variable A:"))
}
while (A === 0) 


if (A %2===0)
{
    console.log("Es par")
}
else if (A %2===1)
{
    console.log("Es impar")
}
else {
    console.log("es nulo")
}



/*Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir el
número por teclado, así hasta que se teclee un número mayor que cero, recuerda la estructura
while.*/