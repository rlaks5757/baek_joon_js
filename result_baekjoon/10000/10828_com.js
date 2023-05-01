const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("result_baekjoon/10000/10828.txt")
  .toString()
  .trim()
  .split("\n");

const input_arr = input.slice(1, input.length);

const result = [];

const result_2 = [];

const stack_function = (command, x) => {
  switch (command) {
    case "push":
      return result.push(x);
    case "pop":
      if (result.length === 0) {
        return result_2.push(-1);
      } else {
        result_2.push(result[result.length - 1]);
        return result.pop();
      }
    case "size":
      return result_2.push(result.length);
    case "empty":
      return result.length === 0 ? result_2.push(1) : result_2.push(0);
    case "top":
      return result.length === 0
        ? result_2.push(-1)
        : result_2.push(result[result.length - 1]);
    default:
      return;
  }
};

input_arr.forEach((com) => {
  const com_arr = com.split(" ");

  if (com_arr.length > 1) {
    const [command, x] = com_arr;
    stack_function(command, Number(x));
  } else {
    const [command] = com_arr;
    stack_function(command);
  }
});

console.log(result_2.join("\n"));
