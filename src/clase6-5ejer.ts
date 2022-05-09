/*
Leer valores del usuario hasta que introduzca un 0
El usuario puede introducir valores numéricos, tanto positivos como 
negativos
Contar la cantidad de valores introducidos que sean mayores a 0 y 
el porcentaje de positivos respecto del total
*/

let total: number = 0;
let positivos: number = 0;
let porcentajePositivos: number = 0;

let numeros: number = Number(prompt("ingrese valores"));

while (numeros !== 0) {
  if (numeros > 0) {
    positivos++;
  }
  total++;
  numeros = Number(prompt("ingrese valores (0 para cortar)"));
}
if (total > 0) {
  porcentajePositivos = (positivos * 100) / total;
  console.log(
    "total positivos " +
      positivos +
      " es el " +
      porcentajePositivos +
      "% del total"
  );
}
