const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2439.txt").toString().trim();

const num_input = Number(input);

for (let i = 1; i <= num_input; i++) {
  const blank = " ".repeat(num_input - i);
  const star = "*".repeat(i);

  console.log(blank + star);
}
