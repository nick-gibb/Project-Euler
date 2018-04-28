// Smallest multiple
// https://projecteuler.net/problem=5
function isDivUpToTwenty(j) {
  for (let i = 2; i <= 20; i += 1) {
    if (j % i !== 0) {
      return false;
    }
  }
  return true;
}

for (let t = 20; ; t += 1) {
  if (isDivUpToTwenty(t) === true) {
    console.log(t);
    break;
  }
}
