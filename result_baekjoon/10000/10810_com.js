const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10810.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((com) => Number(com));

const basket = Array.from({ length: N }, () => 0);

for (let a = 1; a <= M; a++) {
  const [i, j, k] = input[a].split(" ").map((com) => Number(com));

  for (let b = i - 1; b < j; b++) {
    basket[b] = k;
  }
}

let result = "";

basket.forEach((com) => (result += com + " "));

console.log(result);
