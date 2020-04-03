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
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'majukumu';

// const listItems = document.querySelector('ul').getElementsByClassName = ('collection-item');

//getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'majukumu';

// //Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Todos`
// });

// console.log(lis);

//document.QuerySelectorAll()     returns a node list
// const items = document.querySelectorAll('ul.collection li.collection-item');
// items.forEach(function(item, index){
//     item.textContent = `${index} Todos`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for (let i= 0; i < liEven.length; i++) {
//     liEven[i].style.background = 'red';
    
// }

//console.log(items);

//TRAVERSING THE DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children elements nodes  more use case for children > child nodes
val = list.children;
val = list.children[0];
val = list.children[1].textContent = 'todo';

//Get children of children
ist.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

val = list.firstChild;

console.log(val);
