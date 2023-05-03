const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = Number(
  fs.readFileSync("result_baekjoon/2000/2839.txt").toString().trim()
);

const calculation_basket_count = (weight, num) => {
  const a = Math.floor(weight / num);
  if (num === 3) {
    const b = weight % num;

    if (b !== 0) {
      return -1;
    } else {
      return a;
    }
  } else {
    let start_num = 1;

    const result = [];

    while (true) {
      if (num * start_num > weight) {
        break;
      } else {
        const remain_num = weight - num * start_num;

        const remain_num_a = Math.floor(remain_num / 3);
        const remain_num_b = remain_num % 3;

        if (remain_num_b === 0) {
          result.push(remain_num_a + start_num);
        }
        start_num++;
      }
    }

    return result.length > 0 ? Math.min(...result) : -1;
  }
};

const three_basket = calculation_basket_count(input, 3);

const five_basket = calculation_basket_count(input, 5);

if (three_basket === -1 && five_basket === -1) {
  console.log(-1);
} else {
  if (three_basket === -1) {
    console.log(five_basket);
  } else if (five_basket === -1) {
    console.log(three_basket);
  } else {
    console.log(three_basket >= five_basket ? five_basket : three_basket);
  }
}
