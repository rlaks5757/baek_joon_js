const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/9498.txt").toString();

const number_input = Number(input);

if (100 >= number_input && number_input >= 90) {
  console.log("A");
}

if (90 > number_input && number_input >= 80) {
  console.log("B");
}

if (80 > number_input && number_input >= 70) {
  console.log("C");
}

if (70 > number_input && number_input >= 60) {
  console.log("D");
}

if (60 > number_input) {
  console.log("F");
}
