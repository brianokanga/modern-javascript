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
        '<li>city: ' + city + '</li>';


//WITH TEMPLATE LITERAL(es6)
document.body.innerHTML = html;
         