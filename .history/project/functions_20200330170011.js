//FUNCTION DECORATION

//setting up Defaults in ES6
function greet(firstName = 'Nicollette',lastName = 'Vusi'){    
    return `hello ${firstName} ${lastName}`
}

//console.log(greet('Smith','Doe'));

//FUNCTION EXPRESSIONS
const square = function(x = 3){
    return x*X;
};

console.log(square(9));