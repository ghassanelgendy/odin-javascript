const add = function (x, y) {
	return x + y;
};

const subtract = function (x, y) {
	return x - y;
};

const sum = function (...args) {
	let res = 0;
	args.forEach((num) => {
		res += num;
	});
	return res;
};

const multiply = function (...args) {
	let res = 1;
	args.forEach((num) => {
		res *= num;
	});
	return res;
};

const power = function (x, y) {
	return Math.pow(x, y);
};

const factorial = function (x) {
	if (x == 1 || x == 0) {
		return x;
	}
	return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
