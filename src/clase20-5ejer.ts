/*
Sumar los elementos de cada una de las posiciones de dos arreglos 
y guardar el resultado en otro arreglo

El arreglo tiene dimensión 6 y 
los números de los dos vectores los carga el usuario

Ejemplo:
v1 =        1, 3, 7, 9, 9, 5 
v2 =        6, 9, 2, 5, 9, 4 vSuma =    7, 12, 9, 14, 18, 9
*/

let numero1: number[] = new Array(6);
let numero2: number[] = new Array(6);
let suma: number[] = new Array(6);

for (let indice: number = 0; indice < 6; indice++) {
  numero1[indice] = Number(prompt("ingrese primer numero"));
}

for (let indice: number = 0; indice < 6; indice++) {
  numero2[indice] = Number(prompt("ingrese segundo numero"));
}

for (let indice: number = 0; indice < 6; indice++) {
  suma[indice] = numero1[indice] + numero2[indice];
}

for (let indice: number = 0; indice < 6; indice++) {
  console.log(suma[indice]);
}
