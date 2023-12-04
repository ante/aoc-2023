const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

const first = input
  .map((x) => x.replace(/[^0-9]/g, ""))
  .map((x) => parseInt(`${x.charAt(0)}${x.charAt(x.length - 1)}`))
  .reduce((a, v) => a + v);

console.log(first);

const nums = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const second = input
  .map((line) => {
    let x = "";
    [...line].forEach((c, i) => {
      if (Number(c)) x += c;
      else
        nums.forEach((n, j) => {
          if (line.slice(i).startsWith(n)) x += j;
        });
    });
    return parseInt(`${x.charAt(0)}${x.charAt(x.length - 1)}`);
  })
  .reduce((a, v) => a + v);

console.log(second);
