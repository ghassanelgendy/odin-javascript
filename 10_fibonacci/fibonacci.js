const fibonacci = function (num) {
	if (num < 2) {
		return num;
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
};
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
