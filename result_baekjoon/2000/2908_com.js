const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2908.txt").toString().trim().split(" ");

const [a, b] = input;

const a_reverse = Number(a.split("").reverse().join(""));
const b_reverse = Number(b.split("").reverse().join(""));

if (a_reverse > b_reverse) {
  console.log(a_reverse);
} else {
  console.log(b_reverse);
}
