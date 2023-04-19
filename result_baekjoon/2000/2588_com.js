const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2588.txt").toString().trim().split("\n");

const [a, b] = input.map((com) => Number(com));

const [b_1, b_2, b_3] = b
  .toString()
  .split("")
  .map((com) => Number(com));

const [ab_3, ab_2, ab_1] = [a * b_3, a * b_2, a * b_1];

console.log(ab_3);
console.log(ab_2);
console.log(ab_1);
console.log(ab_1 * 100 + ab_2 * 10 + ab_3);
