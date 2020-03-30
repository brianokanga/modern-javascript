const id = '100';

// //EQUAL TO
// if (id == 100) {
//     console.log('correct');
// }else{
//     console.log('Incorrect');
// }

// //NOT EQUAL TO
// if (id != 100) {
//     console.log('correct');
// }else{
//     console.log('Incorrect');
// }


// //EQUAL TO VALUE AD TYPE
// if (id === 100) {
//     console.log('correct');
// }else{
//     console.log('Incorrect');
// }

// //EQUAL TO VALUE AD TYPE
// if (id !== 100) {
//     console.log('correct');
// }else{
//     console.log('Incorrect');
// }

//TEST IF UNDEFINED
// if (typeof id !== undefined) {
//     console.log(`The ID is ${id}`);
// }else {
//     console.log('No ID')
// }

//GREATER OR LESS THAN
// if (id > 200) {
//     console.log('correct');
// }else{
//     console.log('Incorrect');
// }

//LOGICAL OPERATORS
// AND &&
const name = 'Steve';
const age = 20;

if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);

}
//OR ||
if(age < 16 || age  > 65) {
    console.log(`${name} cannot run the race`);
}else{
    console.log(`${name} is registered for the race`);

}

//TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');


//WITHOUT BRACES(braces are optional)
if (id === 100) 
    console.log('correct');
    else
    console.log('Incorrect');
    
//SWITCHES
const color = 'res';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}
