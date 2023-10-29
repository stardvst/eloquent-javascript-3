for(let i = 0; i < 8; ++i) {
  output = ''
  if(i % 2 === 0) {
    output = ' #'.repeat(4);
  } else {
    output = '# '.repeat(4);
  }
  console.log(output);
}

// solution
let size = 8;

let board = "";

for(let y = 0; y < size; y++) {
  for(let x = 0; x < size; x++) {
    if((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
