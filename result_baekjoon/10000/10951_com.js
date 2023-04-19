const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10951.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ");

  console.log(Number(a) + Number(b));
}
