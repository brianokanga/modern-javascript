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
    return num > 50;
};

val = numbers.find(under50);



console.log(numbers);
console.log(val);

         