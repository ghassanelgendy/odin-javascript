const findTheOldest = function (arr) {
	return arr.reduce((before, after) => {
		const a = before.yearOfDeath - before.yearOfBirth;
		const b = after.yearOfDeath - after.yearOfBirth;
		return a > b ? before.name : after.name;
	});
};
const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
