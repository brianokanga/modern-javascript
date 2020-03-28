// alert("helloworld");

// console.log('helloworld');
// console.log(123);
// console.log(true);
// console.log([1,2,3,4,5]);
// console.log({a:1, b:2});
// console.table({a:1, b:2, c:3, d:4});

// console.error('this is an error');
// console.warn("this is a warning");


//VARIABLES

// let, let const

let name = 'john smith';
console.log(name);
name = "Dan juma";
console.log(name);

// inia a let
let greeting;
greeting = 'Hello';
console.log(greeting);

// letter, numbers _. $
//cannot start with a number
let identity = 'Terry';

//multi word vars
let firstName = 'john';   // Camel case
let first_name = 'mike'; //underscore 
let FirstName = 'Kare';  // Pascals case


//CONST
const Name = 'john';
console.log(name);
// can not reassign 
//must assign a value


//SPUaNNER TO THE WAX
// in objects you can re assign the value 
const person = {
    name: 'john',
    age: 30
}

person.name = 'Nicolette';
person.age = 43;
console.log(person);

//also in array ,using const, you can still add to the array

numbers = [1,2,3,4,];
numbers.push(5);
console.log(typeof numbers);

//DATA TYPES- two types
// primitive data types Data is stored in the exact location its accessed from, stored on the stack
//Primitive data types
// numbers, strings, boolean, null, undefined, symbols(es6)
// all variables are undefined by default


// Reference type the data(considered  objects) is stored on the heap,and accessed dynamically
//Arrays. objects literals, FUnctions, Dates etc

// there are technologies that can turn js into statically typed language eg Typescript, flow js


//TYPE CONVERSION

let Val;
//number to string
val = String(5);

//bool to string
val = String(true);

//Date to string
val = String(new Date());

//array to string
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.3');
 


//output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(3)); 

//type coation
const val1 = String(4);
const val2 = 7;   // javascript automatically converts 7 to a string
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

//NUMBERS
const num1 = 100;
const num2 = 60;
let Val1;


// simple math 
Val1 = num1 + num2;
Val1 = num1 - num2;
Val1 = num1 *num2;
Val1 = num1 / num2;
Val1 = num1 % num2;


console.log(Val1);

//math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.round(2.3);   //round off to the nearest whole number
val = Math.ceil(2.3);    // specify that you want to round off up
val = Math.floor(2.8);    // specify that you want to round of down
val = Math.sqrt(64);
val = Math.abs(-4);     //from the negative, gives you the positive
val = Math.pow(8, 2);
val = Math.min(3,43,54,-554,4,3,33,3);
val = Math.max(3,43,54,-554,4,3,33,3);
val = Math.random();

val = Math.random() * 20 + 1; //andom numbers between 0-19,add 1,get 20


val = Math.floor(Math.random() * 20 + 1);


console.log(val);

//STRINGS 
const middleName = 'William';
const lastName = 'Johnson';
const age = 36;
let name;

//concatnation
name = middleName + ' ' + lastName;

//append
name = 'john ';
name += 'smith';

console.log(name);


