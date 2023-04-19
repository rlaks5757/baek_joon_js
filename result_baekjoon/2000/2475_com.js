const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2475.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 0;

input.forEach((com) => {
  result += Math.pow(com, 2);
});

console.log(result % 10);
