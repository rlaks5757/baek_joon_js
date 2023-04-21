const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2609.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const create_measure_list = (num) => {
  const result = new Set();

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.add(i);
    }
  }

  return [...result];
};

const [a, b] = input;

const a_measure_arr = create_measure_list(a);

const b_measure_arr = create_measure_list(b);

const max_measure = Math.max(
  ...a_measure_arr.filter((com) => b_measure_arr.includes(com))
);

let least_common_multiple = 1;
while (true) {
  if (least_common_multiple % a === 0 && least_common_multiple % b === 0) {
    break;
  }

  least_common_multiple++;
}

console.log(max_measure);
console.log(least_common_multiple);
