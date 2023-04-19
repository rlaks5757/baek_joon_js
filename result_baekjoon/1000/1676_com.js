const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1676.txt")
  .toString()
  .trim();

const input_num = Number(input);

const mu5 = Math.floor(input_num / 5);
const mu25 = Math.floor(input_num / 25);
const mu125 = Math.floor(input_num / 125);

console.log(mu5 + mu25 + mu125);
