const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2525.txt").toString().trim().split("\n");

const [now_time, plus_time] = input;

const [now_time_h, now_time_m] = now_time.split(" ").map((com) => Number(com));

const plus_time_number = Number(plus_time);

let plus_time_h = parseInt(plus_time_number / 60);

const plus_time_m = parseInt(plus_time_number % 60);

if (now_time_m + plus_time_m > 59) {
  const diffm = now_time_m + plus_time_m - 60;

  if (now_time_h + plus_time_h + 1 > 23) {
    const diffh = now_time_h + plus_time_h + 1 - 24;

    console.log(diffh, diffm);
  } else {
    console.log(now_time_h + plus_time_h + 1, diffm);
  }
} else {
  if (now_time_h + plus_time_h > 23) {
    const diffh = now_time_h + plus_time_h - 24;

    console.log(diffh, now_time_m + plus_time_m);
  } else {
    console.log(now_time_h + plus_time_h, now_time_m + plus_time_m);
  }
}
