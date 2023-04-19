const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2884.txt").toString().trim().split(" ");

const [h, m] = input.map((com) => Number(com));

const diffm = m - 45;

if (diffm >= 0) {
  console.log(h, diffm);
} else {
  const resultm = 60 + diffm;
  const diffh = h - 1;

  if (diffh >= 0) {
    console.log(diffh, resultm);
  } else {
    const resulth = 24 + diffh;

    console.log(resulth, resultm);
  }
}
