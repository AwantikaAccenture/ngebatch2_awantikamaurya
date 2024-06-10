// Cursor Park (anyone not typing put your cursor here)
// Rewrite this function in Arrow form:
var sayHello = function (firstName, lastName) { return console.log("sayHello: Hello ".concat(firstName, " ").concat(lastName)); };
sayHello('Neil', 'Jennings');
// TODO make hiEveryone() as arrow function with sayHello functionality
var hiEveryone = function (firstName, lastName) { return console.log("HiEveryone: Hello ".concat(firstName, " ").concat(lastName)); };
hiEveryone('Neil', 'Jennings');
// Rewrite this function in one-line arrow syntax:
var loadsOfMoney = function (myWages) { return myWages * 10; };
// TODO make soMuchMoreMoney() as a one-line arrow expression with loadsOfMoney
var soMuchMoreMoney = function (value) { return loadsOfMoney(value); };
var resultSum = soMuchMoreMoney(300);
console.log("resultSum: ".concat(resultSum));
