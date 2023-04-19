const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/2000/2577.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const multiplication_num = input
  .reduce((acc, cur) => acc * cur, 1)
  .toString()
  .split("");

const number_obj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

multiplication_num.forEach((com) => (number_obj[com] = number_obj[com] + 1));

Object.keys(number_obj).forEach((com) => console.log(number_obj[com]));
