/* 
Una empresa desea premiar a sus empleados con un aumento de sueldo. 
Este aumento se ajusta a la siguiente tabla:
 Sueldo Actual  Sueldo con Aumento
0 - 15.000 $                    20%
15.001 - 20.000  $          10%
20.001 - 25.000  $           5%
Más de 25.000 $       No hay aumento
 Desarrolle un algoritmo dado el salario actual de un empleado 
 determine el aumento de sueldo a aplicar y se lo muestre
Recuerde plantear el Pseudocódigo y las Pruebas de Escritorio
console.log("el preciofinal es", precioproducto);
*/

let sueldo1: number = Number(prompt("ingres salario"));
let salario: number = 0;

switch (true) {
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
