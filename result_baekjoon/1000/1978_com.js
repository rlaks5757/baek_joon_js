const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/1000/1978.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input;

const number_arr = b.split(" ").map((com) => Number(com));
let result = 0;

for (let i = 0; i < Number(a); i++) {
  if (number_arr[i] !== 1) {
    const measure_arr = [];
    for (let j = 1; j <= number_arr[i]; j++) {
      if (number_arr[i] % j === 0) {
        measure_arr.push(j);
      }
    }

    if (measure_arr.length === 2) {
      const [c, d] = measure_arr;
      if (c === 1 && d === number_arr[i]) {
        result++;
      }
    }
  }
}

console.log(result);
