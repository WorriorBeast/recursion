import './style.css';
import { fibs, fibsRec } from './fibonacci';

const recursiveFibonacci = document.getElementById('recursive-fibonacci');
const iterativeFibonacci = document.getElementById('iterative-fibonacci');

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

function randomNum() {
	return Math.floor(Math.random() * 50);
}
