/*
El jardín infantil necesita un programa para poder asignar cursos a las aulas
Se cuentan con tres aulas: Azul, Verde y Amarilla
Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
Dado un número de infantes ingresado por el usuario, el programa deberá determinar 
el aula que minimice la cantidad de bancos vacíos
La salida del algoritmo es el color que identifica al aula asignada
Ejemplo: si la cantidad de personas de un curso es 34, entonces el aula a asignar será la Verde. 
El aula Amarilla no puede ser asignada porque la cantidad de personas es menor a la cantidad de bancos disponibles. 
El aula Azul es descartada porque quedan más bancos inutilizados que en el aula Verde (6 versus 1).

function determinacionAulas(
  aulaAzul: number,
  aulaVerde: number,
  aulaAmarilla: number
): string {
  let aula: string;
  if (cantidadDeInfantes > 35 && cantidadDeInfantes <= aulaAzul) {
    aula = "los infantes fueron asignados a la aula azul";
  } else if (cantidadDeInfantes > 30 && cantidadDeInfantes <= aulaVerde) {
    aula = "los infantes fueron asignados a la aula verde";
  } else if (cantidadDeInfantes > 0 && cantidadDeInfantes <= aulaAmarilla) {
    aula = "los infantes fueron asignados a la aula amarilla";
  } else {
    aula = "El numero ingresado no es valido";
  }
  return aula;
}

let cantidadDeInfantes: number = Number(prompt("ingrese cantidad de alumnos"));
let resultadosAulas = determinacionAulas(40, 35, 30);
console.log(resultadosAulas);
*/

// • Implemente un método llamado “multiplicarArreglo” que recibe
// como parámetros tres arreglos de Enteros del mismo tamaño
// • Los dos primeros arreglos contienen los números que se quieren
// multiplicar
// • El tercer arreglo almacena el cálculo de la multiplicación de cada
// posición de los dos arreglos
// • Utilice este método para multiplicar los siguientes cuatro arreglos
// de tres elementos

/*
function pedirNumeros(){
  for(let i: number = 0; i < numero12.length;i++){
    numero12[i]= Number(prompt("ingrese primer numero"));
    numero22[i]= Number(prompt("ingrese segundo numero"));
    numero32[i]= Number(prompt("ingrese tercer numero"));
  }

}

function multiplicarArreglo(a:number[],a1:number[],a2:number[],a3:number[]):number[]{
  for(let i: number = 0; i < a3.length;i++){
    a3[i]= a[i] * a1[i] * a2[i];
  }
return a3
}

let numero32:number[] = new Array(3);
let numero12:number[] = new Array(3);
let numero22:number[] = new Array(3);
let numero23:number[] = new Array(3);

pedirNumeros()
let resultados : number =(multiplicarArreglo(numero32,numero12,numero22,numero23);
// (multiplicarArreglo(numero32,numero12,numero22,numero23)
console.log(resultados);
// for(let i: number = 0; i < numero23.length;i++){
//   numero23[i]= numero12[i] * numero22[i];
//   console.log(numero23)
// }
*/

// •Diseñar un algoritmo que recorra las
// butacas de una sala de cine y determine
// cuántas butacas desocupadas hay
// •Suponga que para modelar este
// problema, se utiliza un arreglo con
// valores lógicos
// • La presencia de un valor verdadero (true) en
// el arreglo indica que la butaca está ocupada
// • La presencia de un valor falso (false) en el
// arreglo indica que la butaca está desocupada

function cargarButacas(arreglo: boolean[], largo: number) {
  for (let i: number = 0; i < largo; i++) {
    arreglo[i] = Math.floor(Math.random() * 2);
  }
}

function contarDesocupadas(arreglo: boolean[], largo: number): number {
  let desocupadas: number = 0;
  for (let i: number = 0; i < largo; i++) {
    if (arreglo[i] === 0) {
      desocupadas++;
    }
  }
  return desocupadas;
}

let nroButacas: number = Number(prompt("ingrese cantidad de butacas"));
let butacas: boolean = new Array(nroButacas);
cargarButacas(butacas, nroButacas);
let butacasDesocupadas = contarDesocupadas(butacas, nroButacas);
console.log("hay un total de " + butacasDesocupadas + " butacas desocupadas");
