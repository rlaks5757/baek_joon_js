const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = Number(
  fs.readFileSync("result_baekjoon/2000/2742.txt").toString().trim()
);

let result = "";

for (let i = input; i >= 1; i--) {
  result += i + "\n";
}

console.log(result);
