const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/10000/10773.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const input_arr = input
  .slice(1, input.length)
  .reduce((acc, cur) => {
    if (cur !== 0) {
      acc.push(cur);
    } else {
      acc.pop();
    }
    return acc;
  }, [])
  .reduce((acc, cur) => acc + cur, 0);

console.log(input_arr);
