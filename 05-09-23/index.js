//! Problem: CRUD
//? map vs forEach
//? map with basic array
// const numbers = [1, 2, 3, 4, 5];
//? map
// const result = numbers.map(value => value * 2); // [2, 4, 6, 8, 10];
// console.log(result);
//? forEach
// const result = [];
// numbers.forEach(number => result.push(number * 2));
// console.log(result);
//? map with advanced array
// let users = [
// 	{id: 1, name: "sardor", age: 18, height: 180},
// 	{id: 2, name: "murod", age: 19, height: 181},
// 	{id: 3, name: "dilshod", age: 17, height: 182},
// 	{id: 4, name: "anvar", age: 16, height: 183},
// 	{id: 5, name: "umar", age: 15, height: 184},
// ];
// const searchUser = (age) => users.filter(value => value.age === age)
// console.log(searchUser(18));

// const searchUser = (string) => users.filter(value => value.name.includes(string));
// console.log(searchUser("a"));

// const userUpdate = (id, newParams) => {
// 	users = users.map(value => {
// 		if(value.id === id) {
// 			return {...value, ...newParams}
// 		} else return value;
// 	})
// }
// userUpdate(4, {name: "USER4", height: 193});
// console.log(users);