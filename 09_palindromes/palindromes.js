const palindromes = function (string) {
	let reversedString = string.split("").reverse().join("");
	return string === reversedString;
};
console.log(palindromes("madam"));
// Do not edit below this line
module.exports = palindromes;
