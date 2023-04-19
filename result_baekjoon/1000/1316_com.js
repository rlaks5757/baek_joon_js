const fs = require("fs");

// // const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/1000/1316.txt")
  .toString()
  .trim()
  .split("\n");

let count = Number(input[0]);

for (let i = 1; i <= Number(input[0]); i++) {
  let text = input[i].split("");

  for (let j = 0; j < text.length; j++) {
    const find_index = text.indexOf(text[j]);

    if (find_index - j < -1) {
      if (text[j] !== text[j - 1]) {
        count--;
        break;
      }
    }
  }
}

console.log(count);
