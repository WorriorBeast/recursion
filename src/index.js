import './style.css';
import { fibs, fibsRec } from './fibonacci';
import { mergeSort } from './merge-sort';

const recursiveFibonacci = document.getElementById('recursive-fibonacci');
const iterativeFibonacci = document.getElementById('iterative-fibonacci');
const mergeSortBtn = document.getElementById('merge-sort');

recursiveFibonacci.addEventListener('click', () => {
	const time = document.querySelector('#recursive-fibonacci + .time');
	const fibSequence = document.querySelector(
		'#recursive-fibonacci + .time + .fib-sequence',
	);
	const timeStart = performance.now();
	const sequence = fibsRec(randomNum());
	const timeEnd = performance.now();

	time.textContent = `Recursive fibonacci took ${(timeEnd - timeStart).toFixed(15)} milliseconds to complete execution.`;
	fibSequence.textContent = `${sequence.join(', ')}`;
});

iterativeFibonacci.addEventListener('click', () => {
	const time = document.querySelector('#iterative-fibonacci + .time');
	const fibSequence = document.querySelector(
		'#iterative-fibonacci + .time + .fib-sequence',
	);
	const timeStart = performance.now();
	const sequence = fibs(randomNum());
	const timeEnd = performance.now();

	time.textContent = `Iterative fibonacci took ${(timeEnd - timeStart).toFixed(15)} milliseconds to complete execution.`;
	fibSequence.textContent = `${sequence.join(', ')}`;
});

mergeSortBtn.addEventListener('click', () => {
	const unsortedArray = document.querySelector('.unsorted-array');
	const sortedArray = document.querySelector('.sorted-array');
	let arrayLength = randomNum();
	let array = [];

	if (arrayLength <= 2) arrayLength = 5;

	for (let i = 0; i < arrayLength; i++) {
		array.push(randomNum());
	}

	unsortedArray.textContent = `Unsorted array: [${array.join(', ')}]`;
	sortedArray.textContent = `Sorted array: [${mergeSort(array).join(', ')}]`;
});

function randomNum() {
	return Math.floor(Math.random() * 50);
}
