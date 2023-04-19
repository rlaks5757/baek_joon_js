const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/1330.txt").toString().trim().split(" ");

const [a, b] = input.map((com) => Number(com));

if (a > b) {
  console.log(">");
}

if (a < b) {
  console.log("<");
}

if (a === b) {
  console.log("==");
}
