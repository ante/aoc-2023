const fs = require("fs");

const input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((x) => x.replace(/\r/g, "").split(":")[1].split(";"))
  .map((x) => x.map((y) => y.split(",").map((z) => z.trim())));

const maxNum = {
  red: 12,
  green: 13,
  blue: 14,
};

const validGames = [];

input.forEach((game, i) => {
  let isValid = true;
  game.forEach((set) => {
    set.forEach((cubes) => {
      const split = cubes.split(" ");
      const num = Number(split[0]);
      const color = split[1];

      if (maxNum[color] < num) isValid = false;
    });
  });
  if (isValid) validGames.push(i + 1);
});

const first = validGames.reduce((a, v) => a + v);

console.log(first);

let minNum = {
  red: 0,
  blue: 0,
  green: 0,
};

const totals = [];

input.forEach((game) => {
  game.forEach((set) => {
    set.forEach((cubes) => {
      const split = cubes.split(" ");
      const num = Number(split[0]);
      const color = split[1];
      if (num > minNum[color]) minNum[color] = num;
    });
  });

  totals.push(minNum.red * minNum.blue * minNum.green);

  minNum = {
    red: 0,
    blue: 0,
    green: 0,
  };
});

const second = totals.reduce((a, v) => a + v);

console.log(second);
