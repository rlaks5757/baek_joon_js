const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2798.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const card_arr = input[1].split(" ").map(Number);

const result = new Set();

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let z = j + 1; z < N; z++) {
      console.log(i, j, z);
      const card_sum = card_arr[i] + card_arr[j] + card_arr[z];

      if (card_sum <= M) {
        result.add(card_sum);
      }
    }
  }
}

if ([...result].length > 0) {
  console.log(Math.max(...[...result]));
} else {
  console.log(0);
}
