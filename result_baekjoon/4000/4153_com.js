const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/4000/4153.txt")
  .toString()
  .trim()
  .split("\n");

const result = [];

input.forEach((com, idx) => {
  if (idx !== input.length - 1) {
    const [a, b, c] = com
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    if (a ** 2 + b ** 2 === c ** 2) {
      result.push("right");
    } else {
      result.push("wrong");
    }
  }
});

console.log(result.join("\n"));
