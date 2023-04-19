const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/9086.txt").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const first = input[i][0];
  const last = input[i][input[i].length - 1];

  console.log(first + last);
}
