/*16. Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números naturales.*/


    const prompt = require("prompt-sync")({ sigint: true });


    for (let number = 1; number <= 9; number++) {
        console.log(number ** 2);
    }