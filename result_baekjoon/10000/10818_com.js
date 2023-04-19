const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10818.txt")
  .toString()
  .trim()
  .split("\n");

const arr_input = input[1].split(" ").map((com) => Number(com));

console.log(Math.min(...arr_input), Math.max(...arr_input));
