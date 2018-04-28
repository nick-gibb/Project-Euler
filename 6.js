let sum = 0;
let notSquaredSum = 0;
let sumSquared = 0;

function sumSquares(max) {
  for (let i = 1; i <= max; i += 1) {
    sum += i * i;
  }
  return sum;
}

function sumOfSquares(max) {
  for (let i = 1; i <= max; i += 1) {
    notSquaredSum += i;
  }
  sumSquared = notSquaredSum ** 2;
  return sumSquared;
}

const diff = sumOfSquares(100) - sumSquares(100);
console.log(diff);
