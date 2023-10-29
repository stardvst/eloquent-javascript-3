function isEven(num) {
  if(num < 0) num = -num;
  if(num === 0) return true;
  if(num === 1) return false;

  return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(0));
console.log(isEven(1));

// solution
function isEven(n) {
  if(n == 0) return true;
  if(n == 1) return false;
  if(n < 0) return isEven(-n);
  return isEven(n - 2);
}
