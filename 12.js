function getTriNum(num) {
  let triNum = 0;
  for (let i = 1; i < num + 1; i += 1) {
    triNum += i;
  }
  return triNum;
}

function getFactors(num) {
  const factors = [];
  for (let i = 1; i < num / 2 + 1; i += 1) {
    // console.log(`Checking ${i}`);
    if (num % i === 0) {
      factors.push(i);
      // console.log(`Array now has ${factors.length} items`);
    }
  }
  return factors.length + 1;
}

// const check = getTriNum(76576500);
// console.log(getFactors(76576500));

for (let i = 0; ; i += 1) {
  const triNum = getTriNum(i);
  console.log(`Checking ${i}, which has a triNum of ${triNum}`);
  const factors = getFactors(triNum);
  console.log(`It has ${factors} factors`);
  if (factors > 500) {
    console.log(`Finished. The triangle number ${i} has over 500 factors.`);
    break;
  }
}
