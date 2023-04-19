const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/15552.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input[0]);

let result = "";

for (let i = 1; i <= count; i++) {
  const [a, b] = input[i].split(" ");
  result += Number(a) + Number(b) + "\n";
}

console.log(result);
