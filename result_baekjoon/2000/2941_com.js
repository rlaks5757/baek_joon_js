const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs.readFileSync("result/2000/2941.txt").toString().trim();

let input_copy = input;

const text_arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i = 0; i < text_arr.length; i++) {
  input_copy = input_copy.split(text_arr[i]).join("@");
}

console.log(input_copy.length);
