const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/10000/11050.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

let fa_n = 1;

let fa_k = 1;

let fa_n_k = 1;

for (let i = 1; i <= N; i++) {
  fa_n *= i;
}

for (let j = 1; j <= K; j++) {
  fa_k *= j;
}

for (let z = 1; z <= N - K; z++) {
  fa_n_k *= z;
}

console.log(fa_n / (fa_k * fa_n_k));
