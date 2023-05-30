const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/17000/17219.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const N_map = new Map();

const N_arr = input.slice(1, N + 1);

N_arr.forEach((com) => {
  const [site, pw] = com.split(" ");
  N_map.set(site, pw);
});

const result = [];

input.slice(N + 1).forEach((com) => {
  result.push(N_map.get(com));
});

console.log(result.join("\n"));
