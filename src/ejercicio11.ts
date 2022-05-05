//login que al acabo de tres intentos da acabaste los intentos

let clave: string;
let intentos: number = 0;
let continuar: boolean = true;

while (intentos < 3 && continuar == true) {
  clave = prompt("ingrese clave");
  if (clave === "eureka") {
    console.log("clave correcta");
    continuar = false;
  } else {
    console.log("clave incorrecta");
  }
  intentos++;
}
if (continuar === true) {
  console.log("acabaste los intentos");
}
