const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/25000/25206.txt")
  .toString()
  .trim()
  .split("\n");

const score_list = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const input_arr = [];

input.forEach((com) => {
  const [a, b, c] = com.split(" ");

  if (c !== "P") {
    input_arr.push({
      score: Number(b),
      grade: score_list[c],
      score_grade: Number(b) * score_list[c],
    });
  }
});

const reduce_score_grade = input_arr.reduce(
  (acc, cur) => (acc = acc + cur.score_grade),
  0
);

const reduce_grande = input_arr.reduce(
  (acc, cur) => (acc = acc + cur.score),
  0
);

console.log((reduce_score_grade / reduce_grande).toFixed(6));
