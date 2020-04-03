// let val ;
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;



// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');


// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);
 
// scriptsArr.forEach(function(script){
//     console.log(scripts);
// })

// // console.log(val);

// //JS SELECTORS

// //1. getElementById
// //console.log(document.getElementById('task-title'));
// // console.log(document.getElementById('task-title').id);
// // console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// //change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // change the content
// taskTitle.textContent = 'Task lists';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// //2. Document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'we there';
// document.querySelector('li:nth-child(odd)').style.background = 'gray';
// document.querySelector('li:nth-child(even)').style.background = 'purple';

//documents.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);





