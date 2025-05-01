// Q2: createGreeter - Closure retains name
function createGreeter(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}

const greet = createGreeter("Alice");
console.log(greet()); // Hello, Alice!
