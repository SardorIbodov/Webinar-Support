//? 1
// const capitalize = (string) => {
//   let array = string.split(" ");
//   array = array.map(value => {
// 		let newString = value[0].toUpperCase() + value.slice(1, value.length);
// 		return newString;
// 	})
// 	return array.join(" ");
// };
// let result = capitalize("js string exercises");
// console.log(result);

//? 2
// const getWords = (string) => {
// 	let result = {};
// 	for(let char of string) {
// 		result[char] ? result[char]++ : result[char] = 1
// 	}
// 	return result;
// }
// let result = getWords("kfjdklfjglkdfjflrekljf");
// console.log(result);x

//? 3
// const sortByLength = (array) => {
//   return array.sort((a, b) => a.length - b.length);
// };
// console.log(sortByLength(["You", "are", "beautiful", "looking"]));

//? 4
// const isArray = (something) => Array.isArray(something);
// console.log(isArray("fgjgl"));
// console.log(isArray([3, 4]));

//? 5
// console.log("a".charCodeAt());
// console.log(String.fromCharCode(97));
// const stringRange = (start, finish, count) => {
//   let result = [];
//   for (let i = start.charCodeAt(); i <= finish.charCodeAt(); i += count) {
//     result.push(String.fromCharCode(i));
//   }
//   return result;
// };
// console.log(stringRange("a", "z", 3));
