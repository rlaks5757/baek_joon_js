const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2444.txt").toString().trim();

const num_input = Number(input);

const result = [];

for (let i = 1; i <= num_input; i++) {
  const star = 2 * i - 1;

  result.push(" ".repeat(num_input - i) + "*".repeat(star));
}

for (let i = num_input - 1; i >= 1; i--) {
  const star = 2 * i - 1;

  result.push(" ".repeat(num_input - i) + "*".repeat(star));
}

console.log(result.join("\n"));
