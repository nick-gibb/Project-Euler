// Largest palindrome product
// https://projecteuler.net/problem=4
const palindromes = [];

function reverseNum(n) {
  const nStr = `${n}`;
  return nStr
    .split('')
    .reverse()
    .join('');
}

for (let i = 100; i < 1000; i += 1) {
  const j = i * i;
  const reversed = reverseNum(j);
  const jStr = `${j}`;
  if (reversed === jStr) {
    palindromes.push(reversed);
  }
}

console.log(`The largest is ${palindromes.slice(-1)[0]}`);
