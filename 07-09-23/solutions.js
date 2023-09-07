//! 1
// const capitalize = (string) => {
//   let array = string.split(" ");
//   array = array.map((word) => {
//     let newWord = word[0].toUpperCase() + word.slice(1, word.length);
// 		return newWord;
//   });
// 	let newString = array.join("");
// 	return newString;
// };
// let result = capitalize("js string exercises");
// console.log(result);

//! 2
// const countCharacters = (string) => {
// 	let result = {};
// 	for(char of string) {
// 		result[char] ? result[char]++ : result[char] = 1
// 	}
// 	return result;
// }
// console.log(countCharacters("adsjfdsfsfjsdjfhacabcsbajda"));

//! 3
// const sortByLength = (array) => {
//   let result = array.sort((a, b) => a.length - b.length);
//   return result;
// };
// console.log(sortByLength(["good afternoon", "hello", "hi", "good morning"]));

//! 4
// const isArray = (something) => Array.isArray(something);
// console.log(isArray([1, 2, 3, 4]));

//! 5
// const stringRange = (char1, char2, count) => {
// 	let result = [];
// 	for(let i = char1.charCodeAt(); i <= char2.charCodeAt(); i += count) {
// 		result.push(String.fromCharCode(i));
// 	}
// 	return result;
// }
// console.log(stringRange("a", "z", 2));

