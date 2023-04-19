const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2753.txt").toString();

const number_input = Number(input);

if (
  number_input % 4 === 0 &&
  (number_input % 100 !== 0 || number_input % 400 === 0)
) {
  console.log(1);
} else {
  console.log(0);
}
