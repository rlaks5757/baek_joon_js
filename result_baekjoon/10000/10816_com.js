const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/10000/10816.txt")
  .toString()
  .trim()
  .split("\n");

const card_list_arr = input[1].split(" ").reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }

  return acc;
}, {});

const find_card_list_arr = input[3].split(" ").map(Number);

const result = [];

find_card_list_arr.forEach((com) => {
  if (card_list_arr[com]) {
    result.push(card_list_arr[com]);
  } else {
    result.push(0);
  }
});

console.log(result.join(" "));
