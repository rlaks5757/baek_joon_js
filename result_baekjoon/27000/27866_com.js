const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/27866.txt")
  .toString()
  .trim()
  .split("\n");

const [S, i] = input;

console.log(S.split("")[Number(i) - 1]);
