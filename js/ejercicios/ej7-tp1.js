let primernumero = parseInt(prompt("Ingrese el primer numero"));
let segundonumero = parseInt(prompt("Ingrese el segundo numero"));
let tercernumero = parseInt(prompt("Ingrese el tercer numero"));

console.log(primernumero)
console.log(segundonumero)
console.log(tercernumero)

if(primernumero > segundonumero && primernumero > tercernumero){
  document.write("El primer numero es mayor que todos -" + primernumero)
}else if(primernumero == segundonumero && primernumero == tercernumero){
  document.write("Todos los numeros son iguales")
}else if(primernumero < segundonumero && primernumero < tercernumero){
  document.write("El primer numero es menor que todos -" + primernumero)
}else if(tercernumero > primernumero && tercernumero > segundonumero){
  document.write("El tercer numero es mayor que todos -" + tercernumero)
}else if(segundonumero > primernumero && segundonumero > tercernumero){
  document.write("El segundo numero es mayor a todos -" + segundonumero)
}else if(tercernumero < primernumero && tercernumero < segundonumero){
  document.write("El tercer numero es menor que todos - " + tercernumero)
}else if(segundonumero < primernumero && segundonumero < tercernumero){
  document.write("El segundo numero es menor que todos -" + segundonumero)
}
































/*

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));

console.log(numero1);
console.log(numero2);
console.log(numero3);

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El primero numero ingreado es mayor - " + numero1);
} else if (numero2 > numero3) {
  document.write("El segundo numero ingresado es mayor - " + numero2);
} else if (numero1 == numero2 && numero3) {
  document.write("Todos los numeros son iguales - " + numero2);
} else {
  document.write("El tercer numero ingresado es mayor - " + numero3);
}


*/