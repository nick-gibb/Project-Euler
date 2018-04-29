let maxLength = 1;
let chain = [];
let theNum = 1;

function getChain(num) {
  let next;
  if (num === 1) {
    chain.push(num);
  } else if (num % 2 === 0) {
    // console.log("We're even");
    next = num / 2;
    chain.push(num);
    // console.log(chain);
    getChain(next);
  } else {
    // console.log("We're odd");
    next = 3 * num + 1;
    chain.push(num);
    // console.log(chain);
    getChain(next);
  }
}

for (let i = 1; i < 1000000; i += 1) {
  chain = []; // empty the arry for each i
  getChain(i); // populate the array
  // console.log(`i is ${i} and chain length is ${chain.length} and maxLength is ${maxLength}`);
  //   console.log(chain.length);
  if (chain.length > maxLength) {
    maxLength = chain.length;
    theNum = i;
  }
}

console.log(`The highest is ${theNum}`);
