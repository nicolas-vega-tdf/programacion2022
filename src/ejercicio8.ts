let precio: number = Number(prompt("precio del producto"));
let cantidad: number = Number(prompt("cantidad"));
let precioproducto: number = precio * cantidad;
if (precioproducto > 1000) {
  let descuento: number = precioproducto * 0.1;
  precioproducto = precioproducto - descuento;
}
console.log("el preciofinal es", precioproducto);
