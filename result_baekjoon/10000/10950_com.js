const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10950.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input[0]);

const num_arr = input
  .slice(1, input.length)
  .map((com) => com.split(" ").map((com2) => Number(com2)));

for (let i = 0; i < count; i++) {
  const [a, b] = num_arr[i];

  console.log(a + b);
}
