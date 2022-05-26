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
let sumaNotas: number = 0;

for (let indice = 0; indice <= long; indice++) {
  alumnos[indice] = prompt("ingrese nombre de los alumos");
}

for (let i = 0; i <= long; i++) {
  notas1[i] = Number(prompt("ingrese las notas (primer trimestre) "));
}

for (let i = 0; i <= long; i++) {
  notas2[i] = Number(prompt("ingrese las notas (segundo trimestre) "));
}

for (let i = 0; i <= long; i++) {
  notas3[i] = Number(prompt("ingrese las notas (tercer trimestre) "));
}

for (let i = 0; i <= long; i++) {
  sumaNotas = (sumaNotas + notas1[i] + notas2[i] + notas3[i]) / 3;
}

console.log(alumnos + " su promedio anual es: " + sumaNotas);

// function notastrimestre(){
//   for(let i = 0;i<=long;i++){
//     notas1[i]=Number(prompt("ingrese las notas (primer trimestre) "))
//   }
// }

// let long: number = Number(prompt("ingrese cantidad de alumnos"))
// let alumnos : string[] = new Array(long)
// let notas1 : number[] = new Array(long)

// for(let indice = 0;indice <= long;indice++){
//   alumnos[indice]=prompt("ingrese nombre de los alumos");
// }

// notasPrimertrimestre()
// notassegundotrimestre()
// notastercertrimestre()
