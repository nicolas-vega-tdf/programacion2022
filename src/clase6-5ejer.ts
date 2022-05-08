/*
Leer valores del usuario hasta que introduzca un 0
El usuario puede introducir valores numéricos, tanto positivos como 
negativos
Contar la cantidad de valores introducidos que sean mayores a 0 y 
el porcentaje de positivos respecto del total
*/

let continuar: number = 1;
let contador: number = 0;
let suma: number = 0;

while (continuar !== 0) {
  let numeros: number = Number(prompt("ingrese valores"));
  if (numeros > 0) {
    contador++;
    suma = numeros + suma;
  }
  continuar = Number(prompt("continuar?"));
}
console.log("total:" + suma);
console.log("porcentaje:" + suma / contador);
