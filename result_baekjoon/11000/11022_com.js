const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/11022.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input[0]);

let result = "";

for (let i = 1; i <= count; i++) {
  const [a, b] = input[i].split(" ");

  const sum = Number(a) + Number(b);

  result += "Case #" + i + ": " + a + " + " + b + " = " + sum + "\n";
}

console.log(result);
