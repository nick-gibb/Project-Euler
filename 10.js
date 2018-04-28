function isPrime(num) {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let sum = 0;
for (let i = 2; i <= 2000000; i += 1) {
  if (isPrime(i)) {
    console.log(`${i} is prime.`);
    sum += i;
  }
}
console.log(`The sum is ${sum}`);
