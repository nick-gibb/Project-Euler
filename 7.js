// 10001st prime
// https://projecteuler.net/problem=7

function isPrime(num) {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const arrPrimes = [];
for (let j = 2; ; j += 1) {
  if (isPrime(j)) {
    arrPrimes.push(j);
    if (arrPrimes.length === 10002) {
      console.log(`The 10,001 prime number is ${j}`);
      break;
    }
  }
}
