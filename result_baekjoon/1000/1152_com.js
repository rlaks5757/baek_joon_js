const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/1152.txt").toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length);
