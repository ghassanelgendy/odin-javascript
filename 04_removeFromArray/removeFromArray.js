const removeFromArray = function (array, ...toRemove) {
	let newArray = [];
	array.forEach((element) => {
		if (!toRemove.includes(element)) {
			newArray.push(element);
		}
	});

	return newArray;
};
// Do not edit below this line
console.log(removeFromArray([1, 2, 3, 4, 5, 6], 3, 4));
module.exports = removeFromArray;
