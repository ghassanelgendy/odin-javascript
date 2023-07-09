const removeFromArray = function (array, toRemove) {
	newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] != toRemove) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};
// Do not edit below this line
console.log(removeFromArray([1, 2, 3, 4], 3));
module.exports = removeFromArray;
