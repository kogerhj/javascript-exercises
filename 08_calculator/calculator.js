const add = function(a = 0, b =0) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
 return array.reduce((a, b) => a + b, 0)
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
