const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1966.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...case_input] = input;

let result = [];

for (let i = 0; i < case_input.length; i += 2) {
  let [N, M] = case_input[i].split(" ").map(Number);

  const importance_arr = case_input[i + 1].split(" ").map(Number);

  let count = 0;

  while (true) {
    const importance_max = Math.max(...importance_arr);

    const number = importance_arr.shift();

    if (number === importance_max) {
      count++;

      if (M === 0) {
        result.push(count);
        break;
      }
    } else {
      importance_arr.push(number);
    }

    if (M === 0) {
      M = importance_arr.length - 1;
    } else {
      M--;
    }
  }
}

console.log(result.join("\n"));

// for (let k = 0; k < N_importance_arr.length; k++) {
//   const check_obj = N_importance_arr[start_num];

//   if (check_obj["importance"] === j) {
//     break;
//   } else if (check_obj["importance"] < j) {
//     N_importance_arr.shift();
//     N_importance_arr.push(check_obj);
//     continue;
//   }
// }

// for (let j = importance_max; j > 0; j--) {
//   for (let k = 0; k < N_importance_arr.length; k++) {
//     const check_obj = N_importance_arr[start_num];
//     if (check_obj["importance"] !== j) {
//       if (check_obj["importance"] < j) {
//         N_importance_arr.splice(start_num, 1);
//         N_importance_arr.push(check_obj);
//       }
//     } else {
//       N_importance_arr.splice(start_num, 1);
//       N_importance_arr.unshift(check_obj);

//       break;
//     }
//   }

//   if (N_importance_arr.find((com) => com.importance === j)) {
//     start_num += 1;
//   }
// }
