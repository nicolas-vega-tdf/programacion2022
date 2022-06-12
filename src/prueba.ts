/*
Hacer un programa que simule la compra que hace un cliente en un
supermercado. 
El cliente va tener que ingresar por teclado la CANTIDAD de productos que va a llevar(listo)
los PRODUCTOS que va a comprar(listo)
el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.(listo)
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led
*/
function cargarProductos(arrayproductos: string[]): void {
  for (let i: number = 0; i < arrayproductos.length; i++) {
    arrayproductos[i] = prompt("ingrese productos");
  }
}

function precioProducto(arrayprecio: number[]) {
  for (let i: number = 0; i < arrayprecio.length; i++) {
    arrayprecio[i] = Number(prompt("ingrese el precio de " + productos[i]));
  }
}

function stockProducto(arraycantidad: number[]) {
  for (let i: number = 0; i < arraycantidad.length; i++) {
    arraycantidad[i] = Number(prompt("cantidad de " + productos[i]));
  }
}

function precioTotal(precio: number[], cantidad: number[]): number {
  let precioTotal: number = 0;
  for (let i: number = 0; i < precio.length; i++) {
    precioTotal = precioTotal + precio[i] * cantidad[i];
  }
  return precioTotal;
}

function resumenCompra() {
  console.log("el resumen de su compra es: ");
  for (let i: number = 0; i < cantidadProduc.length; i++) {
    console.log(
      cantidadProduc[i] +
        " " +
        productos[i] +
        " a un precio de " +
        "$" +
        precioP[i] +
        " cada una " +
        "nos da una total de " +
        "$" +
        precioP[i] * cantidadProduc[i]
    );
  }
}

let cantidadProductos: number = Number(prompt("ingrese cantidad de productos"));
let productos: string[] = new Array(cantidadProductos);
let precioP: number[] = new Array(cantidadProductos);
let cantidadProduc: number[] = new Array(cantidadProductos);

cargarProductos(productos);
precioProducto(precioP);
stockProducto(cantidadProduc);
let totalCompra: number = precioTotal(precioP, cantidadProduc);
resumenCompra();

if (totalCompra < 1001) {
  console.log(
    "su monto final es de: " + "$" + totalCompra + " gracias por su compra"
  );
} else if (totalCompra > 3000) {
  console.log(
    "su monto final es de: " +
      "$" +
      totalCompra +
      " y esta participando por un 0km"
  );
} else if (totalCompra > 2000) {
  console.log(
    "su monto final es de: " +
      "$" +
      totalCompra +
      " y esta participando por una moto 0km"
  );
} else if (totalCompra > 1000) {
  console.log(
    "su monto final es de: " +
      "$" +
      totalCompra +
      " y esta participando por un tv led"
  );
}
