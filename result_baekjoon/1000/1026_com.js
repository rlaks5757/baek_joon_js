const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1026.txt")
  .toString()
  .trim()
  .split("\n");

const [, A, B] = input;

const a_num = A.split(" ")
  .map(Number)
  .sort((a, b) => {
    console.log(a, b);
    return a - b;
  });

const b_num = B.split(" ")
  .map(Number)
  .sort((a, b) => {
    return b - a;
  });

let result = 0;

a_num.forEach((com, idx) => {
  result += com * b_num[idx];
});

console.log(result);
