//conectar eventos a botones

document.getElementById('btn-suma')
    .addEventListener('click', ejecutarSuma);

document.getElementById('btn-palindromo')
    .addEventListener('click', ejecutarPalindromo);

document.getElementById('btn-ordenar')
    .addEventListener('click', ejecutarOrdenamiento);

// función para mostrar resultados en pantalla
function mostrarResultado(id, texto, tipo) {
  const div = document.getElementById(id);
  div.textContent = texto;

  div.classList.remove('exito', 'error');
  div.classList.add(tipo);
}

//1. SUMA DE DÍGITOS//
// Recibe un número y suma sus dígitos
function digitsSum(num) {
  let suma = 0;

  while (num > 0) {
    suma += num % 10;
    num = Math.floor(num / 10);
  }

  return suma;
}
function ejecutarSuma() {
  const input = document.getElementById('numero-input').value;

  if (input === '') {
    mostrarResultado('resultado-suma', 'Escribe un número', 'error');
    return;
  }

  const resultado = digitsSum(Number(input));
  mostrarResultado('resultado-suma', resultado, 'exito');
}

/*
Alternativa (más moderna):

function digitsSum(num) {
    return num
    .toString()
    .split('')
    .reduce((suma, digito) => suma + Number(digito), 0);
}
*/

// 2. PALÍNDROMO//
function isPalindrome(texto) {
// convertir a minúsculas para ignorar mayúsculas/minúsculas
  const limpio = texto.toLowerCase();
// comparar el texto limpio con su reverso
  return limpio === limpio.split('').reverse().join('');
}

function ejecutarPalindromo() {
  const input = document.getElementById('palabra-input').value.trim();

  // validar que el input no esté vacío
  if (input === '') {
    mostrarResultado('resultado-palindromo', 'Escribe una palabra', 'error');
    return;
  }

  const resultado = isPalindrome(input);

  mostrarResultado(
    'resultado-palindromo',
    resultado ? '✓ Sí es palíndromo' : '✗ No es palíndromo',
    resultado ? 'exito' : 'error'
  );
}

// 3. ORDENAR NÚMEROS (BUBLEE SORT)
function integerSort(arr) {
  const copia = [...arr];

  for (let i = 0; i < copia.length - 1; i++) {

    for (let j = 0; j < copia.length - 1 - i; j++) {

      if (copia[j] > copia[j + 1]) {

        // intercambio
        let temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;

      }

    }
  }

  return copia;
}

function ejecutarOrdenamiento() {
  const input = document.getElementById('lista-input').value.trim();

  // validar que el input no esté vacío
  if (input === '') {
    mostrarResultado('resultado-ordenamiento', 'Escribe números', 'error');
    return;
  }

  // convertir texto a array de números
  const numeros = input
//dividir por comas o espacios
    .split(/[, ]+/)
    .map(n => Number(n.trim()))
    .filter(n => !isNaN(n));

  // validar números válidos
  if (numeros.length === 0) {
    mostrarResultado('resultado-ordenamiento', 'No hay números válidos', 'error');
    return;
  }

  const ordenado = integerSort(numeros);

  // mostrar resultado
  mostrarResultado(
    'resultado-ordenamiento',
    ordenado.join(', '),
    'exito'
  );
}