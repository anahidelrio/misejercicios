/* En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El
    descuento se basa en:
    | Condición | Acción |
    | -- | -- |
    | Si el monto es menor que 500€ | No hay descuento |
    | Si el monto está comprendido entre 500€ y 1.000€ inclusive | 5% descuento |
    | Si el monto está entre 1.000€ y 7.000€ inclusive | 10% descuento |
    | Si el monto está entre 7.000€ y 15.000€ inclusive | 20% descuento |
    | Más de 15.000€ | 25% descuento |
    Imprimir por consola el precio final  */

    const prompt = require("prompt-sync")({ sigint: true });

    
    let A = Number(prompt("introduce monto de compra: "));

if (A=>500) {
    console.log("no hay descuento")
}
if (A>500 || A<1000){
    console.log(A)
}
