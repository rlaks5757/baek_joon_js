const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1475.txt")
  .toString()
  .trim()
  .split("")
  .map((com) => (com === "9" ? 6 : Number(com)));

const input_count = input
  .map((com) => {
    const count_arr_length = input.filter((com2) => com2 === com).length;

    return {
      num: com,
      count: com === 6 ? Math.round(count_arr_length / 2) : count_arr_length,
    };
  })
  .reduce((acc, cur) => {
    const find_obj = acc.find((com) => com.num === cur.num);

    if (!find_obj) {
      acc.push(cur);
    }

    return acc;
  }, []);

const result = Math.max(...input_count.map((com) => com.count));

console.log(result);
