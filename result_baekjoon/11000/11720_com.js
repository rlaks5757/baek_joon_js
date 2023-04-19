const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/11720.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input;

const b_reduce = b
  .split("")
  .map((com) => Number(com))
  .reduce((acc, cur) => {
    return (acc = acc + cur);
  }, 0);

console.log(b_reduce);
