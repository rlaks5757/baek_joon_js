const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2745.txt")
  .toString()
  .trim()
  .split(" ");

const [n, b] = input;

const n_arr = n.split("").reverse();

const b_num = Number(b);

let result = 0;

for (let i = 0; i < n_arr.length; i++) {
  if (n_arr[i] >= "A" && n_arr[i] <= "Z") {
    const number = n_arr[i].charCodeAt(0) - 55;
    result += number * Math.pow(b_num, i);
  } else {
    const number = Number(n_arr[i]);
    result += number * Math.pow(b_num, i);
  }
}

console.log(result);
