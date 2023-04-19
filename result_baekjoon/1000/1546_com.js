const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("problem/1546.txt").toString().split("\n");

const count = Number(input[0]);

const score = input[1].split(" ").map((com) => Number(com));

const max_score = Math.max(...score);

const fixed_socore = score.map((com) => {
  const fixed = (com / max_score) * 100;

  return fixed;
});

let total_socre = 0;

fixed_socore.forEach((com) => (total_socre += com));

console.log(total_socre / count);
