const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("problem/27494.txt").toString();

const num = Number(input);

const this_year_arr = String(2023).split("");

const handleTicketCount = (num) => {
  if (num < 2023) {
    return 0;
  } else {
    let ticket_count = 0;
    let arr = [];

    for (let i = 2023; i <= num; i++) {
      const i_arr = String(i).split("");

      let index = 0;

      this_year_arr.forEach((com, idx) => {
        const slice_arr = i_arr.slice(index > 0 ? -1 : index, i_arr.length);

        const find_index = slice_arr.findIndex((com2) => com2 === com);

        console.log(slice_arr);
        console.log(find_index, idx);
        if (find_index === -1) {
          return;
        } else {
          if (idx === this_year_arr.length - 1) {
            ticket_count + 1;
          } else {
            index = idx + find_index;
          }
        }
      });
    }

    fs.writeFileSync("test.json", JSON.stringify(arr));

    return ticket_count;
  }
};

console.log(handleTicketCount(num));
