const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2720.txt")
  .toString()
  .trim()
  .split("\n")
  .map((com) => Number(com));

for (let i = 1; i <= input[0]; i++) {
  let change_money = input[i];

  const change_money_arr = [];
  change_money_arr.push(Math.floor(change_money / 25));
  change_money = change_money % 25;

  change_money_arr.push(Math.floor(change_money / 10));
  change_money = change_money % 10;

  change_money_arr.push(Math.floor(change_money / 5));
  change_money = change_money % 5;

  change_money_arr.push(change_money);

  console.log(change_money_arr.join(" "));
}
