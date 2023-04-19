const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/10000/10989.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// const num_input = ;

console.log(
  input
    .slice(1, input.length)
    .sort((a, b) => a - b)
    .join("\n")
);
