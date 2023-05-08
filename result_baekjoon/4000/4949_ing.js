const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/4000/4949.txt")
  .toString()
  .trim()
  .split("\n");

const result = [];

input.forEach((com, idx) => {
  const stack = [];

  if (idx !== input.length - 1) {
    for (let i = 0; i < com.length; i++) {
      if (com[i] === "(" || com[i] === "[") {
        stack.push(com[i]);
      } else if (com[i] === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          result.push("no");
          break;
        }
      } else if (com[i] === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          result.push("no");
          break;
        }
      } else {
        if (i === com.length - 1 && com[i] === ".") {
          result.push("yes");
        }
      }
    }
  }
});

console.log(result.join("\n"));
