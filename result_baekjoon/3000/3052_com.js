const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/3052.txt")
  .toString()
  .trim()
  .split("\n")
  .map((com) => Number(com));

const set = new Set();

input.forEach((com) => set.add(com % 42));

console.log([...set].length);
