const removeFromArray = function (array, ...toRemove) {
	newArray = [];
	for (const arg of toRemove)
		for (let i = 0; i < array.length; i++) {
			if (array[i] !== arg) {
				newArray.push(array[i]);
			}
		}
	return newArray;
};
// Do not edit below this line
console.log(removeFromArray([1, 2, 3, 4], 3));
module.exports = removeFromArray;
