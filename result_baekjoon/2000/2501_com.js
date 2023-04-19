const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/2000/2501.txt")
  .toString()
  .trim()
  .split(" ")
  .map((com) => Number(com));

const [n, k] = input;

const result_arr = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    result_arr.push(i);
  }
}

if (result_arr.length < k) {
  console.log(0);
} else {
  console.log(result_arr[k - 1]);
}
