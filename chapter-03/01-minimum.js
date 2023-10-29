function min(a, b) {
  if(isNaN(a) || isNaN(b)) return 0;
  return a < b ? a : b;
}

console.log(min(1, 5));
console.log(min(10, 5));
console.log(min('10', 5));
console.log(min('10N', 5));
console.log(min(0, 10));
console.log(min(0, -10));

// solution
function min(a, b) {
  if(a < b) return a;
  else return b;
}
