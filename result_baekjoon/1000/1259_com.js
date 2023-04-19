const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1259.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.forEach((com) => {
  const reverse_com = com.split("").reverse().join("");

  console.log(com === reverse_com ? "yes" : "no");
});
