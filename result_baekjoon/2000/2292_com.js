const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2292.txt")
  .toString()
  .trim();

const num_iuput = Number(input);

let count_number = 1;

let positon = 0;

while (num_iuput > count_number) {
  count_number = count_number + 6 * positon;
  positon++;
}

console.log(positon === 0 ? 1 : positon);
