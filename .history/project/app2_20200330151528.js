//TEMPLATE LITERALS
const name = 'John';
const age = 33;
const job = 'web developer';
const city = 'Nairobi';
let html;

//WITHOUT TEMPLATE LITERALS
html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>age: ' + age + '</li>' +
        '<li>job: ' + job + '</li>' +
        '<li>city: ' + city + '</li>'+
        '</ul';

function hello(){
    return 'hello';
}

//WITH TEMPLATE LITERAL/STRINGS (es6)


html = `
    <ul>    
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 +2}</li>
        <li>${hello}</li>
        <li>${age > 30 ? 'over 30' : 'under 30'}</li>  // Ternary operator

    </ul>`;

document.body.innerHTML = html;

//ARRAYS
//Created in two ways
const numbers = [32,43,56,43,76,43,23,77,86,65];
const numbers2 = new Array(32,44,66,45,87,55,33,43);
const fruit = ['Passion','Mango','Banana','Orange','Pear'];
const mixed = [22, 'Hello', true, undefined,null, new Date(), {a:1,b:1}];

let val;
//Get Array Length
val = numbers.length;

//check if is array
 val = Array.isArray(numbers);   //used when dealing with the dom

 //Get single value
 val = numbers[5];
 //insert into array
 numbers[5] = 100;
//find index of a value
val = numbers.indexOf(76);
// //MUTATING ARRAYS
// //Add on to end
// numbers.push(250);
// //add on to front
// numbers.unshift(345);
// //take off from back 
// numbers.pop();
// //take off from the front
// numbers.shift();
// //splice out values
// numbers.splice(1,4);
// //reverse
// numbers.reverse();

//concatenate array
// val = numbers.concat(numbers2);

// //sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// //use the compare function

// //reverse sort
// val = numbers.sort(function(x,y){
//     return y-x;
// });

//find
function under50(num){
    return num < 50;
};

function over50(num){
    return num > 50;
};

val = numbers.find(under50);
val = numbers.find(over50);


console.log(numbers);
console.log(val);


//OBJECT LITERALS
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 40,
    email: 'smith@home.com',
    hobbies: ['music','sports'],
    address: {
        city: 'Nairobi',
        hood: 'Westlands'
    },
    getBirthYear: function(){
        return 2020- this.age;
    }
}

let value = person;

//Get a specific value
value = person.firstName;
value = person['firstName'];  // you can also do it this way
value = person.lastName;
value = person.age;
value = person.hobbies[1];
value = person.address.hood;
value = person.address['city'];
value = person.getBirthYear();

console.log(value);


//Arrays of objects
const people = [
    {name: 'Mike', age: 30},
    {name: 'Smith', age: 23 },
    {name: 'Nicollette', age: 40}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}

let values;

const today = new Date();
let birthday = new Date('9-10-1981 11:34:00');
birthday = new Date('October 10 2020 11:34:00');


values = today.toString();    //object to string
values = String(today);       //object to string
values = birthday

values = today.getMonth();    // the month are zero based
values = today.getDate();
values = today.getDay();
values = today.getUTCFullYear();
values = today.getHours();







console.log(values);