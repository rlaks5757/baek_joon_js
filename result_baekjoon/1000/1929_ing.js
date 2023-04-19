const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1929.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const obj = { 1: true };

const [N, M] = input;

for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
  if (obj[i]) {
    continue;
  }

  for (let j = i ** 2; j <= M; j += i) {
    obj[j] = true;
  }
}

for (let i = N; i <= M; i++) {
  if (!obj[i]) {
    console.log(i);
  }
}
