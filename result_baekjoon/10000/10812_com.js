const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("problem/10812.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((com) => Number(com));

let baseket = Array.from({ length: N }, (com, idx) => idx + 1);

for (let a = 1; a <= M; a++) {
  const [i, j, k] = input[a].split(" ").map((com) => Number(com));

  const slice_a = baseket.slice(0, i - 1);
  const slice_b = baseket.slice(k - 1, j);
  const slice_c = baseket.slice(i - 1, k - 1);
  const slice_d = baseket.slice(j, baseket.length);

  baseket = [...slice_a, ...slice_b, ...slice_c, ...slice_d];
}

console.log(baseket.join(" "));
