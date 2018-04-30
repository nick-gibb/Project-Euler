const number = [1];
let sum = 0;

for (let i = 0; i < 5; i += 1) {
  let overflow = 0;
  const count = number.length + 1;


  for (let j = 0; j < count; j += 1) {
    let digit = number[j] || 0;
    console.log(`j is ${j}, digit is ${digit}`);
    digit = (2 * digit) + overflow;


    if (digit > 9) {
      digit -= 10;
      overflow = 1;
    } else {
      overflow = 0;
    }

    number[j] = digit;
  }
}
console.log(number);
for (let i = 0; i < 5; i += 1) {
  sum += number[i];
}

console.log(sum);
