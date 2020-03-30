// //FOR LOOP
// for(let i = 0; i <= 15; i++){
//     if(i === 7){
//         console.log('7 is my favorite number');
//         continue;
        
//     }

//     if(i === 9){
//         console.log('Stop the loop');
//         break;
//     }

//     console.log('Number' + i);

// };

// i tend to use for loops more
//its not always black and white
//use for loops whe you know the number of iterations
//use while loops when the umber of iterations i uncertain

//WHILE LOOPS
// let i = 0;
// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }


//DO WHILE    always will ru no matter what
// let i = 0;
// do{
//     console.log(`number ${i}`);
//     i++;
// }

// while(i < 10);

//LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//FOREACH LOOP   always use foreach when loop in arrays
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car){
    console.log(car);
});


//MAP
const users = [
    {id: 1, name:'John'},
    {id: 2, name:'Sara'},
    {id: 3, name:'Karen'},
    {id: 4, name:'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);