/*. Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N se
leerá por teclado.*/


    const prompt = require("prompt-sync")({ sigint: true });


    let N = Number(prompt("introduce un número:"));

   /* function calcular(N){
        console.log(N*(N+1)/2);
    }
    calcular(N)

    /*funciona*/
    let total = 0;
    for (let i = 0; i <= N; i++){
        total += i;
    }

    console.log(`La la suma de los N primeros números naturales: ${total} `);
    /*funciona*/