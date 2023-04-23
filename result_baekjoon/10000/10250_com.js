const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/10000/10250.txt")
  .toString()
  .trim()
  .split("\n");

const user_arr = input.slice(1, input.length).map((com) => {
  const [H, W, N] = com.split(" ").map(Number);

  let floor = 0;

  let room_num = 1;

  for (let i = 0; i < N; i++) {
    if (floor >= H) {
      floor = 1;
      room_num++;
    } else {
      floor++;
    }
  }

  if (room_num < 10) {
    return floor.toString() + "0" + room_num.toString();
  } else {
    return floor.toString() + room_num.toString();
  }
});

console.log(user_arr.join("\n"));
