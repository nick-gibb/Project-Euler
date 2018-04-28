// Even Fibonacci numbers
// https://projecteuler.net/problem=2
const arr = [1, 2];
const evenSum = [2];

if (!Array.prototype.last) {
  Array.prototype.last = function () {
    const last = this[this.length - 1];
    const secondLast = this[this.length - 2];
    return last + secondLast;
  };
}

while (true) {
  const lastTwoSum = arr.last();
  if (lastTwoSum > 4000000) {
    break;
  } else {
    arr.push(lastTwoSum);
    if (lastTwoSum % 2 === 0) {
      evenSum.push(lastTwoSum);
    }
  }
}

const sum = evenSum.reduce((a, b) => a + b, 0);

console.log(`The sum of the even numbers in the series less than 4,000,000 is ${sum}`);
