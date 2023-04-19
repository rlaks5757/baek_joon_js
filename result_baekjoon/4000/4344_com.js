const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/4000/4344.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const input_detail = input[i].split(" ");

  const count = Number(input_detail[0]);

  const score = input_detail.slice(1, input_detail.length);

  const total_score = score.reduce((acc, cur) => (acc = acc + Number(cur)), 0);

  const average_score = total_score / count;

  let pass_count = 0;

  for (let j = 0; j < count; j++) {
    if (Number(score[j]) > average_score) {
      pass_count += 1;
    }
  }

  console.log(((pass_count / count) * 100).toFixed(3) + "%");
}
