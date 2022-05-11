function dibujarLineas() {
  let linea: string = "-";
  for (let indice: number = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("ingrese el primer numero"));
let numero2: number = Number(prompt("ingrese el segundo numero"));
let opciones: number = Number(
  prompt(
    "ingrese 1 para sumar, 2 para restar , 3 para dividir y 4 para multiplicar"
  )
);
let calculos: number = 0;

switch (opciones) {
  case 1:
    calculos = numero1 + numero2;
    dibujarLineas();
    console.log("el resultado de la suma es:" + calculos);
    dibujarLineas();
    break;
  case 2:
    calculos = numero1 - numero2;
    dibujarLineas();
    console.log("el resultado de la resta es:" + calculos);
    dibujarLineas();
    break;
  case 3:
    calculos = numero1 / numero2;
    dibujarLineas();
    console.log("el resultado de la division es:" + calculos);
    dibujarLineas();
    break;
  case 4:
    calculos = numero1 * numero2;
    dibujarLineas();
    console.log("el resultado de la multiplicacion es:" + calculos);
    dibujarLineas();
    break;
  default:
    console.log("opcion no valida");
}
