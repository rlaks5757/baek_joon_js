const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1920.txt")
  .toString()
  .trim()
  .split("\n");

const binarySearch = (list, target, left, right) => {
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return 1;
    }

    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0;
};

const base_arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const search_arr = input[3].split(" ").map((com) => {
  const num_com = Number(com);

  return binarySearch(base_arr, num_com, 0, base_arr.length - 1);
});

console.log(search_arr.join("\n"));
