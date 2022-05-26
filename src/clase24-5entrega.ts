// Desarrolle un algoritmo que permita cargar alumnos y
// sus notas en los tres trimestres
// Se debe permitir obtener el promedio anual
// (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
// Luego de resolverlo, pensar en aprovechar métodos y
// discutir como representar la información

let long: number = Number(prompt("ingrese cantidad de alumnos"));
let alumnos: string[] = new Array(long);
let notas1: number[] = new Array(long);
let notas2: number[] = new Array(long);
let notas3: number[] = new Array(long);
let encontrado: boolean = false;
let sumaNotas: number = 0;
let indice = 0;

for (let indice = 0; indice < alumnos.length; indice++) {
  alumnos[indice] = prompt("ingrese nombre de los alumos");
}

for (let i = 0; i < notas1.length; i++) {
  notas1[i] = Number(prompt("ingrese las notas (primer trimestre) "));
}

for (let i = 0; i < notas2.length; i++) {
  notas2[i] = Number(prompt("ingrese las notas (segundo trimestre) "));
}

for (let i = 0; i < notas3.length; i++) {
  notas3[i] = Number(prompt("ingrese las notas (tercer trimestre) "));
}

let buscarAlum: string = prompt(" nombre del alumno a buscar ");
while (indice < long && !encontrado) {
  if (alumnos[indice] === buscarAlum) {
    encontrado = true;
    sumaNotas = (notas1[indice] + notas2[indice] + notas3[indice]) / 3;
  }
  indice++;
}
if (encontrado) {
  console.log(alumnos + " su promedio anual es: " + sumaNotas);
} else {
  console.log("No se pudo encontrar a " + buscarAlum);
}
