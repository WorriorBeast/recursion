const fibs = (sequenceLength) => {
	let sequenceArray = [0, 1];
	let previousNum = 0;
	let currentNum = 1;
	let currentNumClone = currentNum;

	for (let i = 0; i < sequenceLength - 2; i++) {
		currentNum = previousNum + currentNum;
		previousNum = currentNumClone;

		sequenceArray.push(currentNum);

		currentNumClone = currentNum;
	}

	return sequenceArray;
};

const fibsRec = (n) => {
	if (n <= 2) return [0, 1];

	let array = fibsRec(n - 1);

	array.push(array[array.length - 1] + array[array.length - 2]);

	return array;
};

export { fibs, fibsRec };
