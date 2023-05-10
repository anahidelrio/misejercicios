/* Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1, por
ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará número negativos.*/


    const prompt = require("prompt-sync")({ sigint: true });
    
 
    let numeros = [];
    let suma = 0;
    do 
    {
        let numero = Number(prompt("introduce un numero o introduzca -1 para terminar:"));
        for (let i=0; i<numeros.length;i++);
{
suma+= numeros[i];
}
        numero = parselnt(numero);
        numero.push(numeros);
    }
while (numeros === -1);



const media = suma / numeros.length;

console.log (`la media aritmetica es; ${media}`);





    /*hacerlo con do whild */
