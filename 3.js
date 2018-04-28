// Largest prime factor
// https://projecteuler.net/problem=3
const primeFactors = [];
function getFactors(num) {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      if (isPrime(i) == true) {
        primeFactors.push(i);
      }
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

getFactors(600851475143);

console.log(`The largest prime number factor is ${primeFactors.slice(-1)[0]}`);
