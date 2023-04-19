const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1110.txt")
  .toString()
  .trim();

const input_num = Number(input);

let input_num_copy = Number(input);
let count = 1;

while (true) {
  const new_number = String(input_num_copy).split("").map(Number);

  if (new_number.length === 1) {
    new_number.unshift(0);
  }

  const new_number_reduce = new_number.reduce((acc, cur) => acc + cur, 0);

  const new_number_reduce_change = String(new_number_reduce)
    .split("")
    .map(Number);

  const new_number_reduce_right =
    new_number_reduce_change[new_number_reduce_change.length - 1];

  const new_number_right = new_number[new_number.length - 1];

  input_num_copy = new_number_right * 10 + new_number_reduce_right;

  if (input_num === input_num_copy) {
    break;
  }

  count++;
}

console.log(count);
