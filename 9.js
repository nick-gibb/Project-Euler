for (let b = 1000; b > 3; b -= 1) {
  for (let a = 1; a < b; a += 1) {
    const x = a + b + (a * a + b * b) ** 0.5;
    // console.log(`The value of x is ${x}`);
    if (x === 1000) {
      const c = 1000 - a - b;
      if (a < b && b < c) {
        console.log(`a is ${a}, b is ${b}, c is ${c}, and the sum is ${a * b * c}`);
      }
    }
  }
}
