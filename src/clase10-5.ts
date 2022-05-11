function dibujarlineas() {
  let linea: string = "-";
  for (let indice: number = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let primerNumero: number = Number(prompt("ingrese el primer numero"));
let segundoNumero2: number = Number(prompt("ingrese el segundo numero"));
let opciones: number = Number(
  prompt(
    "ingrese 1 para sumar , 2 para restar y cualquier numero para terminar"
  )
);
let resultado: number = 0;

if (opciones === 1) {
  resultado = primerNumero + segundoNumero2;
  dibujarlineas();
  console.log("el resultado de la operacion es " + resultado);
  dibujarlineas();
} else if (opciones === 2) {
  resultado = primerNumero - segundoNumero2;
  dibujarlineas();
  console.log("el resultado de la operacion es " + resultado);
  dibujarlineas();
} else {
  console.log("la opcion invalida");
}
