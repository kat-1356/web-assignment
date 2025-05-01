// Q3: multiplierFactory - closure retains factor
function multiplierFactory(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplierFactory(2);
const triple = multiplierFactory(3);

console.log(double(4)); // 8
console.log(triple(5)); // 15
