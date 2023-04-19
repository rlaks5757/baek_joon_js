const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/2000/2869.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, v] = input;

console.log(Math.ceil((v - b) / (a - b)));
