const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2920.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const input_sort = [...input].sort((a, b) => {
  return a - b;
});

const input_reverse = [...input].sort((a, b) => {
  return b - a;
});

if (JSON.stringify(input) === JSON.stringify(input_sort)) {
  console.log("ascending");
} else if (JSON.stringify(input) === JSON.stringify(input_reverse)) {
  console.log("descending");
} else {
  console.log("mixed");
}
