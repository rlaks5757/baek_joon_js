const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2581.txt")
  .toString()
  .trim()
  .split("\n")
  .map((com) => Number(com));

const [n, m] = input;

const decimal_arr = new Set();

const handlenumber = (num) => {
  if (num === 1) return;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return;
    }
  }

  return decimal_arr.add(num);
};

for (let i = n; i <= m; i++) {
  handlenumber(i);
}

console.log([...decimal_arr]);

if ([...decimal_arr].length > 0) {
  const decimal_reduce = [...decimal_arr].reduce(
    (acc, cur) => (acc = acc + cur),
    0
  );

  const decimal_min = Math.min(...[...decimal_arr]);

  console.log(decimal_reduce);
  console.log(decimal_min);
} else {
  console.log(-1);
}
