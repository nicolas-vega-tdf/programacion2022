let sueldo1: number = Number(prompt("ingres salario"));
let aumento: boolean = true;
let salario: number = 0;

switch (aumento) {
  case 0 <= sueldo1 && sueldo1 <= 15000:
    salario = sueldo1 * 1.2;
    console.log("el salario actual es:", salario);
    break;

  case 15001 <= sueldo1 && sueldo1 <= 20000:
    salario = sueldo1 * 1.1;
    console.log("el salario actual es:", salario);
    break;

  case 20001 <= sueldo1 && sueldo1 <= 25000:
    salario = sueldo1 * 1.05;
    console.log("el salario actual es:", salario);
    break;

  default:
    console.log("no hay aumento");
}
