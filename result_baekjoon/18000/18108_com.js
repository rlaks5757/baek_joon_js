const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/18108.txt").toString().trim();

console.log(Number(input) - 543);
