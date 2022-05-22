/*
Crear un programa con una funcion que reciba por 
parametro su nombre y apellido y lo imprima por consola.


function ingresedatos(n:string , a:string){
  console.log(n + a);
}

let nombres: string = prompt("ingrese nombre");
let apellido: string = prompt("ingrese apellido");

ingresedatos(nombres, apellido);
*/

/*
crear una funcion que reciba un valor numerico 
y devuelva true si es par o false si es impar (con retorno)
*/

function parImpar(numero: number): boolean {
  let resultado: boolean;
  if (numero % 2 === 0) {
    resultado = true;
    console.log("el numero ingresado es par");
  } else if (numero % 2 === 1) {
    resultado = false;
    console.log("el numero ingresado es impar");
  }
  return resultado;
}

let numero: number = Number(prompt("ingrese un numero"));

parImpar(numero);
