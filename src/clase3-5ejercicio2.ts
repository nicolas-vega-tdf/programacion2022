//Desarrollar un algoritmo que dado un número, 
//ingresado por el usuario determine si el 
//número es par o impar y le informe al usuario
//En el caso de ser 0 (cero) el algoritmo deberá  informarlo 

let numero: number = Number(prompt("ingrese numero"))
let parOimpar: boolean=true;

if(numero % 2===0){
  parOimpar=true;
}else{
  parOimpar=false;
}

switch parOimpar {
  case true:
    if(numero===0){
      console.log("el numero ingresado es 0")
    }
   console.log("es par");
    break;
  case false:
    console.log("es impar");
    break;    
}
