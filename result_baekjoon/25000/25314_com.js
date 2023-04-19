const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/25314.txt").toString().trim();

const number_input = Number(input);

const long_count = parseInt(number_input / 4);

let result = "";

for (let i = 1; i <= long_count; i++) {
  result += "long ";
}

console.log(result + "int");
