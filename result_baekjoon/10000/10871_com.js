const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/10871.txt")
  .toString()
  .trim()
  .split("\n");

const [, filter_input] = input[0].split(" ");

const arr_input = input[1].split(" ");

const filter_arr = arr_input.filter(
  (com) => Number(com) < Number(filter_input)
);

let result = "";

filter_arr.forEach((com) => (result += com + " "));

console.log(result);
