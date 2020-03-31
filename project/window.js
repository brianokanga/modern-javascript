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

//both nodejs and chrome use the same engine(V8)

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
val = window.location.port;
val = window.location.href;

// //Redirect
// window.location.href = 'http://google.com';
// //reload
// window.location.reload();

// history object
// val = window.history.go(-3);
// val = window.history.length;

// Navigator
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.appVersion;
val = window.navigator.language;









console.log(val);
