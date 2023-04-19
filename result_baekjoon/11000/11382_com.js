const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/11382.txt").toString().trim().split(" ");

const num_input = input.map((com) => Number(com));

let count = 0;

num_input.forEach((com) => (count += com));

console.log(count);
