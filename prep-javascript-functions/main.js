function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('convert hours into minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('Matt');
console.log('a simple greeting:', greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var addandmultiply = addAndMultiplyBy5(1, 2);
console.log('performing the math:', addandmultiply);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multiplyanddivide = multiplyAndDivideBy5(5, 10);
console.log('doing the math again:', multiplyanddivide);

function subtractTwoNumbers(x, y) {
  return (x - y);
}

var subtraction = subtractTwoNumbers(4, 2);
console.log('subtracting now:', subtraction);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('formula:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullname = getFullName('Giga', 'Chad');
console.log('The full name is:', fullname);

function cube(x) {
  return x * x * x;
}

var cubed = cube(3);
console.log('Cubed:', cubed);
