const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs.readFileSync("result/11000/11653.txt").toString().trim();

let input_num = Number(input);

const result_arr = [];
let idx = 2;

while (input_num !== 1) {
  if (input_num % idx === 0) {
    result_arr.push(idx);
    input_num /= idx;
  } else {
    idx++;
  }
}

console.log(result_arr.join("\n"));
