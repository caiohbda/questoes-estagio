function isFibonacci(n) {
  if (n < 0) return false;

  let a = 0,
    b = 1,
    c = a + b;

  while (c < n) {
    a = b;
    b = c;
    c = a + b;
  }

  return c === n || n === 0;
}

const number = parseInt(prompt("Informe um número: "), 10);
if (isFibonacci(number)) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}
