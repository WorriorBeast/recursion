const mergeSort = (array) => {
	if (array.length == 1) return array;

	let mid = Math.floor(array.length / 2);
	let firstHalf = array.slice(0, mid);
	let secondHalf = array.slice(mid);

	return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

const merge = (firstHalf, secondHalf) => {
	let mergedArray = [];

	while (firstHalf.length && secondHalf.length) {
		if (firstHalf[0] < secondHalf[0]) {
			mergedArray.push(firstHalf.shift());
		} else {
			mergedArray.push(secondHalf.shift());
		}
	}

	return [...mergedArray, ...firstHalf, ...secondHalf];
};

export { mergeSort };
