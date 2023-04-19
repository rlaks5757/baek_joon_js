const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/10809.txt").toString().trim().split("");

const alphabet = [];

for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}

const alphabet_find_index = alphabet.map((com) => input.indexOf(com));

console.log(alphabet_find_index.join(" "));
