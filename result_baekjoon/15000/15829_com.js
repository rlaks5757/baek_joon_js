const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/15000/15829.txt")
  .toString()
  .trim()
  .split("\n");

const text_arr = input[1].split("");

const M = 1234567891;

let r = 1;

let hash = 0;

text_arr.forEach((com) => {
  hash += (com.charCodeAt() - "a".charCodeAt() + 1) * r;
  //a = 1, b = 2 이므로 com.charCodeAt() - "a".charCodeAt() + 1 을 하여 1, 2... 값을 도출함

  r *= 31;

  r %= M;
  //r이 M을 넘지 않도록 M을 나눈 후 나머지 값을 사용

  hash %= M;
  //계산 결과를 M으로 나눈 후 나머지 값을 사용하라고 명시됨
});

console.log(hash);
