let val ;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;



val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


let scripts = document.scripts;

let scriptsArr = Array.from(scripts);
 
scriptsArr.forEach(function(script){
    console.log(scripts);
})

// console.log(val);
//getElementById
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);

//change styling
document.getElementById()
document.getElementById('task-title').style.background = '#333';

