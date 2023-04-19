const fs = require("fs");

console.log(
  fs
    .readFileSync("result/10000/10757.txt")
    .toString()
    .trim()
    .split(" ")
    .map(BigInt)
    .reduce((acc, cur) => acc + cur)
    .toString()
);
