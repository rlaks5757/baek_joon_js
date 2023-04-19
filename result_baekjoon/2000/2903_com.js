const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2903.txt")
  .toString()
  .trim();

const num_iuput = Number(input);

let start_num = 1;

let count = 2;

while (start_num <= num_iuput) {
  count = count + count - 1;
  start_num++;
}

console.log(Math.pow(count, 2));
