const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = Number(
  fs.readFileSync("result_baekjoon/27000/27494.txt").toString().trim()
);

const count_ticket = (i_string) => {
  for (let j = 0; j < i_string.length - 3; j++) {
    for (let k = j + 1; k < i_string.length - 2; k++) {
      for (let l = k + 1; l < i_string.length - 1; l++) {
        for (let v = l + 1; v < i_string.length; v++) {
          const concat = parseInt(
            i_string[j] + i_string[k] + i_string[l] + i_string[v]
          );

          if (concat === 2023) {
            return true;
          }
        }
      }
    }
  }
};

if (input < 2023) {
  console.log(0);
} else {
  let result = 0;

  for (let i = 2023; i <= input; i++) {
    const i_string = i.toString();

    if (count_ticket(i_string)) {
      result += 1;
    }
  }

  console.log(result);
}
