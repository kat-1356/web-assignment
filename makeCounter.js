// Q1: makeCounter - Closure for private counter
function makeCounter() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
