const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10811.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((com) => Number(com));

const basket = Array.from({ length: N }, (com, idx) => idx + 1);

for (let a = 1; a <= M; a++) {
  const [i, j] = input[a].split(" ").map((com) => Number(com));
  const copy_basket = [...basket];
  const arr_a = [];

  for (let b = j - 1; b >= i - 1; b--) {
    arr_a.push(b);
  }

  const arr_b = [...arr_a].reverse();

  arr_b.forEach((com, idx) => {
    basket[com] = copy_basket[arr_a[idx]];
  });
}

let result = "";

basket.forEach((com) => (result += com + " "));

console.log(result);
