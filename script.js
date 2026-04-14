//1.suma de dígitos

//Función que recibe un número entero y devuelve la suma de sus dígitos.
function digitsSum(inputInt) {
  let suma = 0;
// Mientras el número sea mayor que 0, 
// se extrae el último dígito y se suma a la variable "suma". Luego, se elimina el último dígito del número.
  while (inputInt > 0) {
    suma += inputInt % 10;
    inputInt = Math.floor(inputInt / 10);
  }

  return suma;
}

/*Función alternativa. conviertes input en string y lo divides en un array, 
function digitsSum(inputInt) {
    return inputInt
    .toString()
    .split('')
// luego usas .reduce para sumar cada dígito convertido a número.
    .reduce((suma, digito) => suma + Number(digito), 0);
} */
