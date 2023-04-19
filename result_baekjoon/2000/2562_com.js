const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2562.txt").toString().trim().split("\n");

const arr_input = input.map((com) => Number(com));

const max_number = Math.max(...arr_input);

const find_index = arr_input.indexOf(max_number) + 1;

console.log(max_number);
console.log(find_index);
