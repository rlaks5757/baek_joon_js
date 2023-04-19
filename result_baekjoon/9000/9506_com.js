const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/9000/9506.txt")
  .toString()
  .trim()
  .split("\n")
  .map((com) => Number(com));

for (let i = 0; i < input.length - 1; i++) {
  const num = input[i];
  const measure_arr = [];

  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      if (num !== j) measure_arr.push(j);
    }
  }

  const measure_sum = measure_arr.reduce((acc, cur) => (acc = acc + cur), 0);

  if (num === measure_sum) {
    console.log(`${num} = ${measure_arr.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
