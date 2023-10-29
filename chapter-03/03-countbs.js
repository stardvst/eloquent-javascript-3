function countBs(str) {
  return countChar(str, 'b');
}

function countChar(str, ch) {
  let count = 0;
  for(let i = 0; i < str.length; ++i) {
    if(str[i] === ch) {
      ++count;
    }
  }
  return count;
}

console.log(countBs('bvhhbvxmbher'));
console.log(countBs('bvhwieurksh'));
console.log(countBs('uirghfkdgjk'));
console.log(countBs('bvmnbbnbnfhsjd'));

// solution
function countChar(string, ch) {
  let counted = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
