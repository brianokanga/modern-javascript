//WINDOW METHODS / OBJECTS / PROPERTIES
//console.log('we there');
//alert('we there');

//prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are you sure?')){
//     console.log('YES');
// }else {
//     console.log('NO');
// }

//both nodejs and chrome use the same egine(V8)

let val;

// //outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// //outer height and width
// val = window.innerWidth;
// val = window.innerHeight;


//Scroll points
val = window.screenY;   // height
val = window.screenX;  //width

//Location Object
val = window.location;
val = window.location.hostname;


console.log(val);