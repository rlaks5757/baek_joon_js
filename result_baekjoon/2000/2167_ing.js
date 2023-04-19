const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2167.txt")
  .toString()
  .trim()
  .split("\n");

const first = input[0].split(" ").map(Number)[0];
const second = input
  .slice(1, first + 1)
  .map((com, idx) => {
    return com.split(" ").map((com2, idx2) => {
      return { num: Number(com2), x: idx + 1, y: idx2 + 1 };
    });
  })
  .flat();

const fourth = input.slice(first + 2, input.length).map((com) => {
  const [i, j, x, y] = com.split(" ").map(Number);

  const arr_range = second.filter((com2) => {
    return com2.x >= i && com2.x <= x && com2.y >= j && com2.y <= y;
  });

  return arr_range.reduce((acc, cur) => acc + cur.num, 0);
});

console.log(fourth.join("\n"));
