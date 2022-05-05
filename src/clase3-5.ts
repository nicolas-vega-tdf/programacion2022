//desarolle un algoritmo que dados tres números determine cuál es el
//mayor de los tres

let numero1: number = Number(prompt("ingrese numero 1"));
let numero2: number = Number(prompt("ingrese numero 2"));
let numero3: number = Number(prompt("ingrese numero 3"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log("el primer numero es mas grande");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("el segundo numero es mas grande");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log("el tercer numero es mas grande");
}
