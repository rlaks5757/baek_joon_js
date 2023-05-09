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
        if (stack.length === 0 || stack[stack.length - 1] !== "(") {
          result.push("no");
          break;
        }
        stack.pop();
      } else if (com[i] === "]") {
        if (stack.length === 0 || stack[stack.length - 1] !== "[") {
          result.push("no");
          break;
        }
        stack.pop();
      } else {
        if (i === com.length - 1 && com[i] === ".") {
          if (stack.length === 0) {
            result.push("yes");
          } else {
            result.push("no");
          }
        }
      }
    }
  }
});

console.log(result.join("\n"));
