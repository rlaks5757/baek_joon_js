const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = Number(
  fs.readFileSync("result_baekjoon/1000/1436.txt").toString().trim()
);

let num = 666;
let count = 1;

while (count !== input) {
  num++;
  if (num.toString().includes("666")) {
    count++;
  }
}

console.log(num);
