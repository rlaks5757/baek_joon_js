const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10807.txt")
  .toString()
  .trim()
  .split("\n");

const arr_input = input[1].split(" ");

const filter_input = input[2];

const filter_arr = arr_input.filter((com) => com === filter_input);

console.log(filter_arr.length);
