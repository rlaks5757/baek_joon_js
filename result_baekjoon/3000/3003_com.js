const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/3003.txt")
  .toString()
  .trim()
  .split(" ")
  .map((com) => Number(com));

const base_data = [1, 1, 2, 2, 2, 8];

const result = [];

for (let i = 0; i < input.length; i++) {
  result.push(base_data[i] - input[i]);
}

console.log(result.join(" "));
