/*
Implemente un método llamado cantidadDeDivisores que reciba un 
número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, 
por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior
*/

function cantidadDeDivisores(dividendo: number): number {
  for (let indice: number = 0; indice <= dividendo; indice++)
    if (dividendo % indice === 0) {
      contador = contador + 1;
    }
  return contador;
}

let dividendo: number = Number(prompt("ingrese el numero"));
let contador: number = 0;

let divisores = cantidadDeDivisores(dividendo);

if (contador === divisores) {
  console.log("el numero " + dividendo + " es divisible por " + divisores);
} else {
  console.log("el numero no es divisible");
}
