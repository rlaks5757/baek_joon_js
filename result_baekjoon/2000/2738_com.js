const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/2738.txt").toString().trim().split("\n");

const input_arrs = input.map((com) =>
  com.split(" ").map((com2) => Number(com2))
);

const [information_arr_a, information_arr_b] = input_arrs[0];

const data_arr = input_arrs.slice(1, input_arrs.length);

const data_arr_a = data_arr.slice(0, information_arr_a);

const data_arr_b = data_arr.slice(information_arr_a, data_arr.length);

for (let i = 0; i < information_arr_a; i++) {
  const result_arr = [];

  for (let j = 0; j < information_arr_b; j++) {
    result_arr.push(data_arr_a[i][j] + data_arr_b[i][j]);
  }

  console.log(result_arr.join().replaceAll(",", " "));
}
