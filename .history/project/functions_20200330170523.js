//FUNCTION DECORATION

//setting up Defaults in ES6
function greet(firstName = 'Nicollette',lastName = 'Vusi'){    
    return `hello ${firstName} ${lastName}`
}

//console.log(greet('Smith','Doe'));

//FUNCTION EXPRESSIONS
const square = function(x = 3){
    return x*x;
};

// console.log(square(9));

//IMMEDIATELY INVOKABLE FUNCTIONS EXPRESSIONS IIFES
//Functions you invoke and call at the same time
(function(){
    console.log('IIFE Ran..')
})