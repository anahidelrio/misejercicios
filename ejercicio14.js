/*Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina, que
    registran lo que surten en galones, pero el precio de la gasolina se fija en litros. El algoritmo debe
    calcular e imprimir el precio que hay que cobrarle al cliente.
    Precio gasolina = 1.333€/litro
    1 galón = 3,78541 litros*/

    const prompt = require("prompt-sync")({ sigint: true });

    let repostar = Number(prompt("el cliente reposta: "));
    let galones = 3.78541;
    let precio = 1.333;
    console.log (`Usted tiene que pagar: ${precio * galones} €`);

