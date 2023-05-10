/*. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir de
N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14. 

   Leer N
   suma<-0
   Para contador<-1 Hasta 5 Con Paso 1
      suma<-N+suma
      N<-N+1
   FinPara
   Escribir suma
FinProceso
const calcularSuma = function (limite){
    let suma = 0;
}
*/

/*
    const prompt = require("prompt-sync")({ sigint: true });

    let N = Number(prompt("introduce un número:"));
    
    for (let i = 0; i < N; i++)

    if (N/2 === 1){
       console.log( N + 1 );
    }
    else if (N/2 === 0){
        console.log(N + 2);
    }*/
    const prompt = require("prompt-sync")({ sigint: true });
    let N = Number(prompt("introduce un número:"));
    let suma = 0;
    let base = numero %2 === 0 ? numero : numero +1;
    for(let i =0; i< N; i++){
    console.log(base);
    suma+= base;
    base+=2;
    }
    console.log(`la suma es &{suma}`);
    /*mirar y analizar*/
    