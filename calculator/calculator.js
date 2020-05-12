function add (num1, num2) {
	return (num1 + num2);
}

function subtract (num1, num2) {
	return (num1 - num2);
}

function sum (arr) {
	return arr.reduce(add, 0);
}

function multiply (arr) {
    return arr.length 
        ? arr.reduce((a,b) => a*b) 
        : 0;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	return num ? num * factorial(num - 1) : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}