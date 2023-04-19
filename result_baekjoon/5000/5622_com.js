const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/5622.txt").toString().trim().split("");

const dial_list = [
  {
    dial: 2,
    text: "ABC",
    num_return: 3,
  },
  {
    dial: 3,
    text: "DEF",
    num_return: 4,
  },
  {
    dial: 4,
    text: "GHI",
    num_return: 5,
  },
  {
    dial: 5,
    text: "JKL",
    num_return: 6,
  },
  {
    dial: 6,
    text: "MNO",
    num_return: 7,
  },
  {
    dial: 7,
    text: "PQRS",
    num_return: 8,
  },
  {
    dial: 8,
    text: "TUV",
    num_return: 9,
  },
  {
    dial: 9,
    text: "WXYZ",
    num_return: 10,
  },
];

let result = 0;

for (let i = 0; i < input.length; i++) {
  const find_index = dial_list.find((com) => com.text.includes(input[i]));

  result += find_index["num_return"];
}

console.log(result);
