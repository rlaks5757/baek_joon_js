const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1085.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;

const arr = [x, y, w - x, h - y];

console.log(Math.min(...arr));
