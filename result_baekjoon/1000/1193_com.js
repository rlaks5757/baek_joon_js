const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1193.txt")
  .toString()
  .trim();

let num_iuput = Number(input);

let count = 0;

while (true) {
  num_iuput -= count;
  if (num_iuput <= 0) {
    num_iuput += count;
    break;
  }
  count++;
}

const number_iuput_minus = num_iuput - 1;

if (count % 2 === 1) {
  console.log(`${count - number_iuput_minus}/${num_iuput}`);
} else {
  console.log(`${num_iuput}/${count - number_iuput_minus}`);
}
