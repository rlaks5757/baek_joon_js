const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = Number(
  fs.readFileSync("result_baekjoon/2000/2231.txt").toString().trim()
);

const result = [];

for (let i = 1; i <= input; i++) {
  const num_arr = i
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  if (i + num_arr === input) {
    result.push(i);
  }
}

if (result.length > 0) {
  console.log(Math.min(...result));
} else {
  console.log(0);
}
