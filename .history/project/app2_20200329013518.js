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
const numbers2 = new Array(32,44,66,45,87,55,33,43)
         