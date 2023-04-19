const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10813.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((com) => Number(com));

const basket = Array.from({ length: N }, (com, idx) => idx + 1);

for (let a = 1; a <= M; a++) {
  const [i, j] = input[a].split(" ").map((com) => Number(com));

  const i_a = basket[i - 1];
  const j_a = basket[j - 1];

  basket[i - 1] = j_a;
  basket[j - 1] = i_a;
}

let result = "";

basket.forEach((com) => (result += com + " "));

console.log(result);
