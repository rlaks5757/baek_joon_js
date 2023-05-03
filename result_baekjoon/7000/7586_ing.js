const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/7000/7586.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...input_arr] = input;

const num = Number(n);

const result = [];

for (let i = 0; i < num; i++) {
  let ranking = 1;

  for (let j = 0; j < num; j++) {
    if (i !== j) {
      const [a_weight, a_tall] = input_arr[i].split(" ").map(Number);
      const [b_weight, b_tall] = input_arr[j].split(" ").map(Number);

      if (a_weight < b_weight && a_tall < b_tall) {
        ranking++;
      }
    }
  }

  result.push(ranking);
}

console.log(result.join(" "));
