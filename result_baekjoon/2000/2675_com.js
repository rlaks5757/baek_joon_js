const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2675.txt").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const [count, text] = input[i].split(" ");

  const text_arr = text.split("");

  const result = [];

  for (let j = 0; j < text_arr.length; j++) {
    for (let k = 0; k < Number(count); k++) {
      result.push(text_arr[j]);
    }
  }

  console.log(result.join(""));
}
