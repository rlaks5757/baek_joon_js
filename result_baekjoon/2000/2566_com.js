const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/2000/2566.txt")
  .toString()
  .trim()
  .split("\n");

const input_num_arr = input
  .map((com, idx) => {
    const arr2 = com.split(" ");
    return arr2.map((com2, idx2) => {
      {
        return { num: Number(com2), x: idx2 + 1, y: idx + 1 };
      }
    });
  })
  .flat();

const { num, x, y } = input_num_arr.sort((a, b) => {
  return b.num - a.num;
})[0];

console.log(num);
console.log(y, x);
