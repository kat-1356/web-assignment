 // Q4: Memoized Fibonacci using closure
function makeFibonacci() {
  const cache = {};
  return function fib(n) {
    if (n < 0 || !Number.isInteger(n)) return "Invalid input";
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (cache[n]) {
      console.log("From cache:", n);
      return cache[n];
    }
    console.log("Computed:", n);
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fibonacci = makeFibonacci();
console.log(fibonacci(6)); // 8
