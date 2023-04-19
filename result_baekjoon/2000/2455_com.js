const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("problem/2455.txt").toString().trim().split("\n");

const input_change = input.map((com) => {
  const detail_arr = com.split(" ").map((com2) => Number(com2));

  return detail_arr;
});

const count_log = [];

let count = 0;

for (let i = 0; i < input_change.length; i++) {
  const [minus, plus] = input_change[i];
  count += minus * -1;
  count_log.push(count);
  count += plus;
  count_log.push(count);
}

console.log(Math.max(...count_log));
