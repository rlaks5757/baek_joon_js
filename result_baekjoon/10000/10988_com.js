const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs.readFileSync("result/10000/10988.txt").toString().trim();
const input_reverse = input.split("").reverse().join("");

if (input === input_reverse) {
  console.log(1);
} else {
  console.log(0);
}
