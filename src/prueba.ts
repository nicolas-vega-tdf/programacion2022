/*
Hacer un programa que simule la compra que hace un cliente en un
supermercado. 
El cliente va tener que ingresar por teclado la CANTIDAD de productos que va a llevar
los PRODUCTOS que va a comprar
el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
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
function cargarProductos(productos: string[]): void {
  for (let i: number = 0; i < productos.length; i++) {
    productos[i] = prompt("ingrese productos");
  }
}

function precioProducto(precio: number[]): void {
  for (let i: number = 0; i < precio.length; i++) {
    precio[i] = Number(prompt("ingrese el precio de " + productos[i]));
  }
}

function stockProducto(cantidad: number[]): void {
  for (let i: number = 0; i < cantidad.length; i++) {
    cantidad[i] = Number(prompt("cantidad de " + productos[i]));
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
  console.log("El resumen de su compra es: ");
  for (let i: number = 0; i < cantidadProductos.length; i++) {
    console.log(
      cantidadProductos[i] +
        " " +
        productos[i] +
        " a un precio de " +
        "$" +
        precioPorUnidad[i] +
        " cada una " +
        "nos da una total de " +
        "$" +
        precioPorUnidad[i] * cantidadProductos[i]
    );
  }
}

let cantidad: number = Number(prompt("ingrese cantidad de productos"));
let productos: string[] = new Array(cantidad);
let precioPorUnidad: number[] = new Array(cantidad);
let cantidadProductos: number[] = new Array(cantidad);

cargarProductos(productos);
precioProducto(precioPorUnidad);
stockProducto(cantidadProductos);
let totalCompra: number = precioTotal(precioPorUnidad, cantidadProductos);
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
