alert('Mile 2 Oke');

window.addEventListener('DOMContentLoaded', function calc() {
	// init.
	const displayArea = document.querySelector('.js-display');
	const CE = document.querySelector('.js-CE');
	const C = document.querySelector('.js-C');
	const deletion = document.querySelector('.js-delete');
	const devide = document.querySelector('.js-devide');
	const seven = document.querySelector('.js-seven');
	const eight = document.querySelector('.js-eight');
	const nine = document.querySelector('.js-nine');
	const multiply = document.querySelector('.js-multiply');
	const four = document.querySelector('.js-four');
	const five = document.querySelector('.js-five');
	const six = document.querySelector('.js-six');
	const subtract = document.querySelector('.js-subtract');
	const one = document.querySelector('.js-one');
	const two = document.querySelector('.js-two');
	const three = document.querySelector('.js-three');
	const addition = document.querySelector('.js-addition');
	const plusMinus = document.querySelector('.js-plusMinus');
	const zero = document.querySelector('.js-zero');
	const dot = document.querySelector('.js-dot');
	const equals = document.querySelector('.js-equals');

	// Actions
	CE.addEventListener('click', function() {
		displayArea.textContent = '0';
	});
	C.addEventListener('click', function() {
		displayArea.textContent = '0';
	});
	deletion.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	devide.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	seven.addEventListener('click', function() {
		displayArea.textContent = '7';
	});
	eight.addEventListener('click', function() {
		displayArea.textContent = '8';
	});
	nine.addEventListener('click', function() {
		displayArea.textContent = '9';
	});
	multiply.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	four.addEventListener('click', function() {
		displayArea.textContent = '4';
	});
	five.addEventListener('click', function() {
		displayArea.textContent = '5';
	});
	six.addEventListener('click', function() {
		displayArea.textContent = '6';
	});
	subtract.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	one.addEventListener('click', function() {
		displayArea.textContent = '1';
	});
	two.addEventListener('click', function() {
		displayArea.textContent = '2';
	});
	three.addEventListener('click', function() {
		displayArea.textContent = '3';
	});
	addition.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	plusMinus.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	zero.addEventListener('click', function() {
		displayArea.textContent = '0';
	});
	dot.addEventListener('click', function() {
		displayArea.textContent = '.';
	});
	equals.addEventListener('click', function() {
		displayArea.textContent = '';
	});
});
