const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2743.txt").toString().trim();

console.log(input.split("").length);
