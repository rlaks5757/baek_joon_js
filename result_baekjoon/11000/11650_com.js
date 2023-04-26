const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/11000/11650.txt")
  .toString()
  .trim()
  .split("\n");

const input_arr = input
  .slice(1, input.length)
  .map((com) => {
    return com.split(" ").map(Number);
  })
  .sort((a, b) => {
    const [aa, ab] = a;
    const [ba, bb] = b;

    if (aa === ba) {
      return ab - bb;
    } else {
      return aa - ba;
    }
  });

let result = "";

input_arr.forEach((com) => {
  const [a, b] = com;

  result += `${a} ${b}\n`;
});

console.log(result);
