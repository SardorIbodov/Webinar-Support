//? 1
// const tidyNumber = n => +(`${n}`.split("").sort((a, b) => a - b).join("")) === n;

//? 2
// const capitals = (word) => {
//   let result = [];
//   for (let index in word) {
//     if (word[index] === word[index].toUpperCase()) result.push(+index);
//   }
//   return result;
// };

//? 3
// const fakeBin = (x) => {
//   let result = "";
//   for (let item of x) {
//     item >= 5 ? (result += "1") : (result += "0");
//   }
//   return result;
// };

//? 4
// const points = (games) => games.reduce((c, v) => (v[0] > v[2] ? c + 3 : v[0] === v[2] ? c + 1 : c), 0);
