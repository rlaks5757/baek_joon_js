const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const input = fs
  .readFileSync("result_baekjoon/2000/2775.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const case_num = input[0];

const slice_arr = (arr, num) => {
  const result = [];

  let slice_num = 0;

  for (let i = 1; i <= num; i++) {
    result.push(arr.slice(slice_num, slice_num + 2));
    slice_num += 2;
  }

  return result;
};

const case_arr = slice_arr(input.slice(1, input.length), case_num).map(
  (com) => {
    const [k, n] = com;

    const floor_arr = [];

    for (let i = 0; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        floor_arr.push({ x: j, y: i });
      }
    }

    const floor_add_people = floor_arr.reduce((acc, cur) => {
      if (cur.y === 0) {
        acc.push({ ...cur, floor_add_people: cur.x });
      } else {
        const find_prev_floor = acc.filter((com2) => {
          return com2.y === cur.y - 1 && com2.x <= cur.x;
        });

        acc.push({
          ...cur,
          floor_add_people: find_prev_floor.reduce(
            (acc2, cur2) => acc2 + cur2.floor_add_people,
            0
          ),
        });
      }

      return acc;
    }, []);

    const result = floor_add_people.find(
      (com2) => com2.y === k && com2.x === n
    );

    return result.floor_add_people;
  }
);

console.log(case_arr.join("\n"));
