const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/10000/10814.txt")
  .toString()
  .trim()
  .split("\n");

const information_arr = input.slice(1, input.length).sort((a, b) => {
  const [a_age] = a.split(" ");
  const [b_age] = b.split(" ");

  return a_age - b_age;
});

console.log(information_arr.join("\n"));
