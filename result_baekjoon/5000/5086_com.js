const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/5000/5086.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((com) => {
  const [a, b] = com.split(" ").map((com2) => Number(com2));

  let result;

  if (a === 0 && b === 0) return;

  if (b % a === 0) result = "factor";

  if (a % b === 0) result = "multiple";

  if (result !== "factor" && result !== "multiple") result = "neither";

  console.log(result);
});
