const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2751.txt")
  .toString()
  .trim()
  .split("\n");

const result = new Set();

input.slice(1, input.length).forEach((com) => {
  result.add(Number(com));
});

console.log([...result].sort((a, b) => a - b).join("\n"));
