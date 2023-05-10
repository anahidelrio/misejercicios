/*console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
let a = 0.1 + 0.2;
a = a.toFixed(2);
console.log(a);
console.log(a == 0.3);

const persona = {
  nombre: "Juan",
  fechaNacimiento: 19790801,
  "color de ojos": "azul",
  edad: function () {
    let hoy = new Date();
    let anio = hoy.getFullYear();
    let mes = hoy.getMonth() + 1;
    let dia = hoy.getDate();
    let fechaActual = anio * 10000 + mes * 100 + dia;
    let edad = (fechaActual - this.fechaNacimiento) / 10000;
    return edad;
  },
};

console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona);
let propiedad = "nombre";
console.log(persona[propiedad]);
propiedad = "color de ojos";
console.log(persona[propiedad]);

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}*/
//crear un array de pueblos 5 recorrer el array e ir mostrando los pueblos pares

/*const array= ["Frijiliana", "Nerja", "Fuengirola", "Benalmádena", "Coín", "Tolox", "Torreolinos"]
for (let i = 0 ; i < array.length ; i++)
if (i%2===0)
{
  console.log(array[i])
}
/*
   Crear un juego de tragaperras que genere una jugada calculando tres combinaciones 
   de frutas de un total de 5 frutas diferentes.
   Además en cada jugada se calculará una apuesta de un valor entre 1 y 10.
   El premio será un múltipo de la apuesta juegada cuando ocurran cualquiera de estas 
   combinaciones:
   x1 si coinciden la fruta 1 y 3
   x3 si coinciden la fruta 2 y 3
   x5 si coinciden la fruta 1 y 2
   x7 si coinciden la fruta 1, 2 y 3
   const frutas = ["🍏", "🍐", "🍊", "🍋", "🍌"];
*/

/*const objetos = ["manzana", "pera", "naranja", "limon", "platano"]
const objetosSeleccionados = []
const apuesta = 10;
const PREMIO_12 = 5; 
const PREMIO_123 = 7; 
const PREMIO_13 = 1; 
const PREMIO_23 = 3;



for (let i = 0; i < 3; i++){
  let indiceAleatorio = Math.floor (Math.random()* objetos.length);
  objetosSeleccionados.push(objetos[indiceAleatorio]);
 // let apuesta = Math.floor (Math.random()* 10) + 1;
}console.log('objetos seleccionados:', objetosSeleccionados);

if (objetosSeleccionados [0] === objetosSeleccionados[1] && objetosSeleccionados[1] === objetosSeleccionados[2]){
  console.log(`Premio 1 ${PREMIO_123 * apuesta}`);
}
else if (objetosSeleccionados [0] === objetosSeleccionados [1]){
  console.log(`Premio 2 ${PREMIO_12 * apuesta}`);
}
else if (objetosSeleccionados [1] === objetosSeleccionados[2]){
  console.log(`Premio 3 ${PREMIO_23 * apuesta}`);
}
else if (objetosSeleccionados [0] === objetosSeleccionados[2]){
  console.log(`Premio 4 ${PREMIO_13 * apuesta}`);
}

else { 
  console.log(`No tiene premio`);
}*/





/*const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("Cual es tu saldo:"))
let B = Number(prompt("Cuanto dinero quieres sacar:"))
if (A>=B) {
  console.log (`Ha retirado: ${B} Su saldo actual es: ${B-A}`)
}


else if (A<B){
  console.log (`No tiene saldo suficiente`)
}
consultar para mejorar*/

/*


/* obtener 5 numeros primos obteniendo entre 1 y un millon*/

/*const prompt = require("prompt-sync")({ sigint: true });

function numerosPrimos()

for (let i = 0; i < 3; i++){
  let indiceAleatorio = Math.floor (Math.random()* ++1);
  objetosSeleccionados.push(objetos[indiceAleatorio]);
  

}*/

/*function esPrimo(numero){
  for (let i = 2; i < numero; i++){
  if (numero % i === 0) {
    return false
  }
}
  return true;
}

let resultado = []
while (resultado.length < 5) {
let numero = Math.floor(Math.random()* 10000000);
if (esPrimo(numero)){
  resultado.push(numero);
}
}
console.log(resultado)*/


/*tirar dos dados y los resultados se iran colocando en en su casilla desde el 2 al 12*/


/*const tirada = 100;
const resultado = [0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < tirada; i++ ){
const tirada_1= Math.floor(Math.random()*6+1);
const tirada_2 = Math.floor(Math.random()*6+1);  
console.log(`La tirada 1 es ${tirada_1} y La tirada 2 es ${tirada_2}`);
let suma = tirada_1 + tirada_2;
}


if (suma === 12){
  resultado.push(1[10]);
}
if (suma === 11){
  resultado.push(1[9])
}
if (suma === 10){
  resultado.push(1[8])
}
if (suma === 9){
  resultado.push(1[7])
}
if (suma === 8){
  resultado.push(1[6])
}
if (suma === 7){
  resultado.push(1[5])
}
if (suma === 6){
  resultado.push(1[4])
}
if (suma === 5){
  resultado.push(1[3])
}
if (suma === 4){
  resultado.push(1[2])
}
if (suma === 3){
  resultado.push(1[1])
}
if (suma === 2){
  resultado.push(1[0])
};;;;;;;;;;;;;;;;;;;;/*arreglar*/

/*solicitar una frase por consola, metodo clase string, (indexof()*/

