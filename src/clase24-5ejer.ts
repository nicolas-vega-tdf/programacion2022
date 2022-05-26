// Almacene en un arreglo de dimensión N,
// números (la cantidad es ingresada por el usuario)
// Muestre cuántos números son positivos,
// cuántos son negativos y cuántos ceros hay

let longitud: number = Number(prompt("ingrese la longitud"));
let arreglo1: number[] = new Array(longitud);
let contadorpositivos: number = 0;
let contadornegativos: number = 0;

for (let indice: number = 0; indice < longitud; indice++) {
  arreglo1[indice] = Number(prompt("ingrese numeros"));
}

function cantidadDenumeros(numero: number): void {
  for (let indice: number = 0; indice <= longitud; indice++)
    if (arreglo1[indice] > 1) {
      contadorpositivos = contadorpositivos + 1;
    } else if (arreglo1[indice] <= 0) {
      contadornegativos = contadornegativos + 1;
    }
}

let positivos = cantidadDenumeros(contadorpositivos);

//if (contador > 1)
console.log(positivos);
//console.log(contadorpositivos)
console.log();
