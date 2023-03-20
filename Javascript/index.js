console.log("Test console");

// Creating a varible using let keyword
let Name = "Pavithra";
console.log(Name);

// Creating a varible using Const keyword
const variableName = "Animal";
console.log(variableName);


/*
Variable Naming

1. The name should be unique
2. The name should not be any reserved keyword.
3. The name must start with a character, _ , $ . 
*/

// Data Types - String

const singleQuotes = 'Hello';
const doubleQuotes = "Hello!!";
const backticks = `Hello !!!`; // Backticks allow us to embed variables and Expresion into string. using ${}.

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

// Backtics Example
const dogName = 'Leo';
const abc = `I have a pet called , ${dogName} `;
const cdf = `${2 + 2}`;

console.log(abc);
console.log(cdf);

// typeof - to know what type of data 
console.log( typeof cdf);

// Data Type - Numbers - its untyped 
const number = 10;

console.log(number);

const firstNum = 5;
const secondNum = 10;

const result = firstNum / secondNum; // operation +, - , *, /

console.log(result);

// NaN - Not a Number
const abs = "hello";
const exNum = 20;

console.log(abs/exNum);
console.log(typeof (abs/exNum));

// Data Type - Booleans (True/False)
// True - yes, correct, 1
// False - No, incorrect , 0

const isCool = true;

console.log( typeof isCool);

// example 1
if(isCool){
    console.log("Hi man, you're cool...");
}else{
    console.log("Hi Man...!!");
}

// example 2
const age = 20;
console.log(age < 18);

// Null - emplty or unknown
const exp = null;
console.log(exp);
console.log(typeof exp);

let  stdNo = null;
stdNo = 123;
console.log(stdNo)

// Undefined - a variable that has not be assigned with value.
let x;
console.log(x);

// Data Type - Objects - complex and used to store collection of data.

const studentName = 'John';
const studentAge = 20;

const person = {
    studentName : 'John',
    studentAge : 20,
}

// Dot notation - used to get particular value of the object.
console.log( person.studentName); 
console.log(typeof person.studentAge); // number

// Array 

const arr = [1, 2, 3, 4 ];
console.log(arr); // Object

// Date Object
const date = new Date();

console.log(date); // object




 

