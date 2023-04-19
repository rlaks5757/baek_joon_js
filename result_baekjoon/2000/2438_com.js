const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2438.txt").toString().trim();

const num_input = Number(input);

let result = "";

for (let i = 1; i <= num_input; i++) {
  result += "*";
  console.log(result);
}
