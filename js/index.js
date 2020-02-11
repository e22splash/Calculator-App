// alert('Mile 2 Oke'); //testing js connectivity

window.addEventListener('DOMContentLoaded', function calc() {
	// init.
	let globalCalcStore = [];
	let result = [];
	let globalSignTracker = '';

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

	// EventListener
	CE.addEventListener('click', function() {
		displayArea.textContent = '0';
		globalCalcStore = [];
	});
	C.addEventListener('click', function() {
		globalCalcStore.push(0);
		displayArea.textContent = '0';
		globalCalcStore = [];
	});
	deletion.addEventListener('click', function() {
		displayArea.textContent = '';
	});
	devide.addEventListener('click', function() {
		globalSignTracker = '/';
	});
	seven.addEventListener('click', function() {
		globalCalcStore.push(7);
		displayArea.textContent = '7';
	});
	eight.addEventListener('click', function() {
		globalCalcStore.push(8);
		displayArea.textContent = '8';
	});
	nine.addEventListener('click', function() {
		globalCalcStore.push(9);
		displayArea.textContent = '9';
	});
	multiply.addEventListener('click', function() {
		globalSignTracker = '*';
	});
	four.addEventListener('click', function() {
		globalCalcStore.push(4);
		displayArea.textContent = '4';
	});
	five.addEventListener('click', function() {
		globalCalcStore.push(5);
		displayArea.textContent = '5';
	});
	six.addEventListener('click', function() {
		globalCalcStore.push(6);
		displayArea.textContent = '6';
	});
	subtract.addEventListener('click', function() {
		globalSignTracker = '-';
	});
	one.addEventListener('click', function() {
		globalCalcStore.push(1);
		displayArea.textContent = '1';
	});
	two.addEventListener('click', function() {
		globalCalcStore.push(2);
		displayArea.textContent = '2';
	});
	three.addEventListener('click', function() {
		globalCalcStore.push(3);
		displayArea.textContent = '3';
	});
	addition.addEventListener('click', function() {
		globalSignTracker = '+';
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
		displayArea.textContent = processor(globalCalcStore, globalSignTracker);
	});
});

// Actions

function multiplication(a, b) {
	return a * b;
}

function deviding(a, b) {
	return a / b;
}

function subtracting(a, b) {
	return a - b;
}

function adding(a, b) {
	return a + b;
}

function processor(nums, sign) {
	if (sign === '+') {
		return adding(nums[0], nums[1]);
	} else if (sign === '*') {
		return multiplication(nums[0], nums[1]);
	} else if (sign === '-') {
		return subtracting(nums[0], nums[1]);
	} else if (sign === '/') {
		return deviding(nums[0], nums[1]);
	}
}
