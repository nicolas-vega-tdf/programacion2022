let numero1: number = Number(prompt("ingrese numero 1"));
let numero2: number = Number(prompt("ingrese numero 2"));
let suma: number = 0;

if (numero1 > numero2) {
  for (let indice: number = numero2; indice <= numero1; indice++)
    suma = suma + indice;
  console.log(suma);
} else {
  for (let indice: number = numero1; indice <= numero2; indice++)
    suma = suma + indice;
  console.log(suma);
}
