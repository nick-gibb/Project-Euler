// Multiples of 3 and 5
// https://projecteuler.net/problem=1
const arr = [];
for (let i = 0; i < 1000; i += 1) {
  if (i % 5 === 0 || i % 3 === 0) {
    arr.push(i);
  }
}
const sum = arr.reduce((a, b) => a + b, 0);
console.log(`The sum of all the numbers divisible by 3 and 5 between 0 and 1000 is: ${sum}`);
