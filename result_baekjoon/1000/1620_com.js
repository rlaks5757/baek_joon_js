const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1620.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const N_map = new Map();

const N_arr = input.slice(1, N + 1);

N_arr.forEach((com, idx) => N_map.set(com, idx + 1));

const result = [];

input.slice(N + 1).forEach((com) => {
  const check = Number(com);

  if (isNaN(check)) {
    return result.push(N_map.get(com));
  } else {
    return result.push(N_arr[check - 1]);
  }
});

console.log(result.join("\n"));
