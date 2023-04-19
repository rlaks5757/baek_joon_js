const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/2000/2563.txt")
  .toString()
  .trim()
  .split("\n");

const set = new Set();

for (let i = 1; i <= Number(input[0]); i++) {
  const [x, y] = input[i].split(" ").map((com) => Number(com));

  for (let j = 1; j <= 10; j++) {
    for (let k = 1; k <= 10; k++) {
      set.add(JSON.stringify([x + k, y + j]));
    }
  }
}

console.log(set.size);
