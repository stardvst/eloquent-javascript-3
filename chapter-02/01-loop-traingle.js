for(let i = 1; i <= 7; ++i) {
  console.log('#'.repeat(i));
}

// solution
for(let line = "#"; line.length < 8; line += "#")
  console.log(line)
