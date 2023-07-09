const repeatString = function (string, number = 1) {
	if (number < 0) {
		return "ERROR";
	} else {
		let newString = "";
		for (let i = 0; i < number; i++) {
			newString = newString.concat(string);
		}
		return newString;
	}
};
// Do not edit below this line
module.exports = repeatString;
