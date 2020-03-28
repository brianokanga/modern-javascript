//TEMPLATE LITERALS
const name = 'John';
const age = 30;
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
        <li>${age > 30 ? 'over 30' : 'under 30'}</li>

    </ul>`;

document.body.innerHTML = html;
         