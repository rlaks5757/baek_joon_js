const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/11000/11866.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

let number_arr = Array.from({ length: N }, (_, idx) => {
  return idx + 1;
});

let index_num = K;

const result = [];

for (let i = 0; i < N; i++) {
  while (true) {
    if (index_num > number_arr.length) {
      index_num -= number_arr.length;

      result.forEach((com) => {
        const filter_arr = number_arr.filter((com2) => com2 !== com);

        number_arr = [...filter_arr];
      });
    } else {
      break;
    }
  }

  result.push(number_arr[index_num - 1]);
  index_num += K;
}

console.log("<" + result.join(", ") + ">");
