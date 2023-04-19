const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = Number(
  fs.readFileSync("result_baekjoon/2000/2741.txt").toString().trim()
);

let result = "";

for (let i = 1; i <= input; i++) {
  result += i + "\n";
}

console.log(result);
