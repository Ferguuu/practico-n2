let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

/* Estructura if
if(condicion logica){
    todas las lineas de codigo cuando la condicion es verdadera o es true
}else{
    todas las lineas de codig ocuando la condicion es falsa o false
}
*/

if (numero1 > numero2) {
  // numero1 es mayor
  document.write("El numero 1 es mayor que el numero 2 -" + numero1);
} else if (numero1 == numero2) {
    document.write("Ambos numeros son iguales -" + numero2);
  } else {
    // numero2 es mayor al numero1
    document.write("El numero 2 es mayor que el numero 1 -" + numero2);
  }
  


  /* Este codigo lo hice yo solo 


let primernumero = parseInt(prompt("Ingrese el primer numero"));
let segundonumero = parseInt(prompt("Ingrese el segundo numero"));

console.log(primernumero);
console.log(segundonumero);

if (primernumero > segundonumero) {
  document.write(
    "El primer numero es mayor que el segundo numero -" + primernumero
  );
} else if (primernumero == segundonumero) {
  document.write("Ambos numeros son iguales -" + segundonumero);
} else {
  document.write(
    "El segundo numero es mayor que el primer numero -" + segundonumero
  );
}


*/