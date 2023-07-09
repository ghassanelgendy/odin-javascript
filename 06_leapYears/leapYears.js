const leapYears = function (year) {
	return !((year / 100) % 4 || year % 4);
};
// Do not edit below this line
module.exports = leapYears;
