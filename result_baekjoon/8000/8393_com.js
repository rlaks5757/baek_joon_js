const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/8393.txt").toString().trim();

const num_input = Number(input);

let sum_number = 0;

for (let i = 1; i <= num_input; i++) {
  sum_number += i;
}

console.log(sum_number);
