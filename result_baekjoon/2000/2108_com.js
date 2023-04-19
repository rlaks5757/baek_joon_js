const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs
  .readFileSync("problem/2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map((com) => Number(com));

const data_count = input[0];

const data_arr_sort = input.slice(1, input.length).sort(function (a, b) {
  return a - b;
});

let num_sum = 0;

let count_obj = {};

for (let i = 0; i < data_arr_sort.length; i++) {
  num_sum += data_arr_sort[i];

  if (count_obj[data_arr_sort[i]] === undefined) {
    count_obj[data_arr_sort[i]] = 1;
  } else {
    count_obj[data_arr_sort[i]] = count_obj[data_arr_sort[i]] + 1;
  }
}

let a =
  Math.round(num_sum / data_count) === -0
    ? 0
    : Math.round(num_sum / data_count);

let b = data_arr_sort[Math.floor(data_count / 2)];

const count_obj_sort_arr = Object.keys(count_obj)
  .map((com) => {
    return [Number(com), count_obj[com]];
  })
  .sort(function (a, b) {
    return a[0] - b[0];
  })
  .sort(function (a, b) {
    return b[1] - a[1];
  });

const multi_check = count_obj_sort_arr.filter(
  (com) => com[1] === count_obj_sort_arr[0][1]
);

let c =
  multi_check.length > 1 ? count_obj_sort_arr[1][0] : count_obj_sort_arr[0][0];

let d = Math.max(...data_arr_sort) - Math.min(...data_arr_sort);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
