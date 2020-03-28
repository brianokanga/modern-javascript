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
const val1 = 4;
const val2 = 7;
const sum = val1 + val2;

console.log(typeof sum);

