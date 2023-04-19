const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1654.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

const cable_arr = input
  .slice(1, input.length)
  .map(Number)
  .sort((a, b) => a - b);

let max = Math.max(...cable_arr);
let min = 0;

let length = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);

  let line_count = cable_arr.reduce(
    (acc, cur) => acc + Math.floor(cur / mid),
    0
  );

  console.log({ max, min, mid, line_count });

  if (line_count >= K) {
    if (mid > length) length = mid;

    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
