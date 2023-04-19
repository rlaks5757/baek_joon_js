const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2750.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num_arr = input
  .slice(1, input.length)
  .sort((a, b) => {
    return a - b;
  })
  .reduce((acc, cur) => {
    if (acc.includes(cur)) {
      return [...acc];
    } else {
      return [...acc, cur];
    }
  }, []);

num_arr.forEach((com) => console.log(com));
