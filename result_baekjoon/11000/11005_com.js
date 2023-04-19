const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/11000/11005.txt")
  .toString()
  .trim()
  .split(" ");

const [n, b] = input;

const n_num = Number(n);

const b_num = Number(b);

let n_copy = n_num;

let change_num_arr = [];

while (n_copy / b_num !== 0) {
  change_num_arr.push(n_copy % b_num);
  n_copy = Math.floor(n_copy / b_num);
}

change_num_arr = change_num_arr.reverse();

for (let i = 0; i < change_num_arr.length; i++) {
  if (change_num_arr[i] >= 10 && change_num_arr[i] <= 35) {
    change_num_arr[i] = String.fromCharCode(change_num_arr[i] + 55);
  }
}

console.log(change_num_arr.join(""));
