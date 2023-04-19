const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2480.txt").toString().trim().split(" ");

const number_input = input.map((com) => Number(com));

const same_number = number_input.filter(
  (com, idx) => number_input.indexOf(com) !== idx
)[0];

const same_count = number_input.filter((com) => com === same_number).length;

if (same_count === 0) {
  const max_number = Math.max(...number_input);
  console.log(max_number * 100);
}

if (same_count === 2) {
  console.log(1000 + same_number * 100);
}

if (same_count === 3) {
  console.log(10000 + same_number * 1000);
}
