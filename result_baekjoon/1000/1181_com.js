const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/1000/1181.txt")
  .toString()
  .trim()
  .split("\n");

const text_list = input.slice(1, input.length).reduce((acc, cur) => {
  if (!acc.includes(cur)) acc.push(cur);
  return acc;
}, []);

const text_length = [...text_list]
  .map((com) => {
    return com.length;
  })
  .reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, [])
  .sort((a, b) => {
    return a - b;
  })
  .map((com) => {
    const text_filter = text_list.filter((com2) => com2.length === com);

    return text_filter.sort();
  });

let result = "";

text_length.flat().forEach((com) => {
  result += com + "\n";
});

console.log(result);
