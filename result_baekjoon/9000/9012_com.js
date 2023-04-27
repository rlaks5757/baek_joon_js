const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/9000/9012.txt")
  .toString()
  .trim()
  .split("\n");

const input_arr = input.slice(1, input.length);

const result = [];

input_arr.forEach((com) => {
  let count = 0;

  for (let text of com) {
    count += text === "(" ? 1 : -1;

    if (count < 0) {
      break;
    }
  }

  result.push(count === 0 ? "YES" : "NO");
});

console.log(result.join("\n"));
