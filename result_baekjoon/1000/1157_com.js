const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result/1000/1157.txt")
  .toString()
  .trim()
  .toLocaleUpperCase()
  .split("");

let count_arr = [];

for (let i = 0; i < input.length; i++) {
  const find_data = count_arr.findIndex((com) => com.alphabet === input[i]);

  if (find_data > -1) {
    const copy_obj = { ...count_arr[find_data] };

    count_arr[find_data] = { ...copy_obj, count: copy_obj["count"] + 1 };
  } else {
    count_arr.push({
      alphabet: input[i],
      count: 1,
    });
  }
}

const max_num = Math.max(...count_arr.map((com) => com.count));

const filter_arr = count_arr.filter((com) => com.count === max_num);

if (filter_arr.length > 1) {
  console.log("?");
} else {
  console.log(filter_arr[0].alphabet);
}
