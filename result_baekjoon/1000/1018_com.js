const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1018.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = input.slice(1, input.length);

const change_count_arr = [];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const check_white_color = (x, y) => {
  let count = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== white[i - x][j - y]) {
        count++;
      }
    }
  }

  return count;
};

const check_black_color = (x, y) => {
  let count = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== black[i - x][j - y]) {
        count++;
      }
    }
  }

  return count;
};

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    change_count_arr.push(check_white_color(i, j));
    change_count_arr.push(check_black_color(i, j));
  }
}

console.log(Math.min(...change_count_arr));
