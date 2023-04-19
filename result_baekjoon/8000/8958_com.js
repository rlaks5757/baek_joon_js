const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/8000/8958.txt")
  .toString()
  .trim()
  .split("\n");

const result_num = Number(input[0]);

for (let i = 1; i <= result_num; i++) {
  const result_spilt = input[i].split("X").filter((com) => com !== "");

  let result = 0;

  result_spilt.forEach((com) => {
    const detail = com.split("");

    detail.forEach((com2, idx2) => {
      result += idx2 + 1;
    });
  });

  console.log(result);
}
