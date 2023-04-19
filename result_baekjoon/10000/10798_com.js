const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/10000/10798.txt")
  .toString()
  .trim()
  .split("\n");

const max_length = Math.max(...input.map((com) => com.length));

let result = "";

for (let i = 0; i < max_length; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i];
  }
}

console.log(result.replaceAll("undefined", ""));
