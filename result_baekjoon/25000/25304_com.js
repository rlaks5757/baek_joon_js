const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs
  .readFileSync("problem/25304.txt")
  .toString()
  .trim()
  .split("\n");

const total_price = Number(input[0]);

const count = Number(input[1]);

const list_arr = input
  .slice(2, input.length)
  .map((com) => com.split(" ").map((com2) => Number(com2)));

let bill_price = 0;

for (let i = 0; i < count; i++) {
  const [item_price, item_count] = list_arr[i];

  bill_price += item_price * item_count;
}

console.log(total_price === bill_price ? "Yes" : "No");
