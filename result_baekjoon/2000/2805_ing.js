const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/2000/2805.txt")
  .toString()
  .trim()
  .split("\n");

const [, wood_length] = input[0].split(" ").map(Number);

const wood_arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const binary_search = () => {
  let start = 0;
  let end = Math.max(...wood_arr);
  let result = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let slice_wood = 0;

    for (let wood of wood_arr) {
      if (wood > mid) slice_wood += wood_length - mid;
    }

    if (slice_wood >= wood_length) {
      if (mid > result) result = mid;

      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
};

console.log(binary_search());
