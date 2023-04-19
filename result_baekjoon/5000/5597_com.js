const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/5597.txt")
  .toString()
  .trim()
  .split("\n")
  .map((com) => Number(com));

const total_list = Array.from({ length: 30 }, (com, idx) => idx + 1);

const filter_input = total_list.filter((com) => input.indexOf(com) === -1);

filter_input.sort((a, b) => a - b);

console.log(filter_input[0]);
console.log(filter_input[1]);
