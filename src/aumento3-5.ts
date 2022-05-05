let sueldo: number = Number(prompt("ingrese sueldo"));
let sueldoActual: number = 0;

if (0 <= sueldo && sueldo <= 15000) {
  sueldoActual = sueldo * 1.2;
  console.log("su sueldo actual es:", sueldoActual);
} else if (15001 <= sueldo && sueldo <= 20000) {
  sueldoActual = sueldo * 1.1;
  console.log("su sueldo actual es:", sueldoActual);
} else if (20001 <= sueldo && sueldo <= 25000) {
  sueldoActual = sueldo * 1.05;
  console.log("su sueldo actual es:", sueldoActual);
} else {
  console.log("no tiene aumento");
}
