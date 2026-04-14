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

/*
Función alternativa.
1.conviertes input en string.
2.Lo divide en un array de caracteres
3.reduce para sumar cada dígito
function digitsSum(inputInt) {
    return inputInt
    .toString()
    .split('')
// luego usas .reduce para sumar cada dígito convertido a número.
    .reduce((suma, digito) => suma + Number(digito), 0);
} 
*/

//2. Palíndromo
function ejecutarPalindromo() {
    // Obtiene el valor del input, eliminando espacios con trim().
  const input = document.getElementById('palabra-input').value.trim();
//Validación: evitar ejecutar lógica si está vacío
  if (input === '') {
    mostrarResultado('resultado-palindromo', 'Escribe una palabra', 'error');
    return;
  }
//Ejecutar la lógica de palíndromo
  const resultado = isPalindrome(input);

//Mostrar resultado con operador ternario (condición ? valor_si_verdadero : valor_si_falso)
  mostrarResultado(
    'resultado-palindromo',
    resultado ? '✓ Sí es palíndromo' : '✗ No es palíndromo',
    resultado ? 'exito' : 'error'
  );
}
