// // document.getElementById()
// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.background = '#5px';

// // document.querySelector
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('#h5'));

// const listItems = document.querySelector('li');

// listItems.style.color = 'red';
// listItems.textContent = 'wagwan';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = 'red';
// }

// // Create element
// const li = document.createElement('li');

// //add class
// li.className = 'collection-item';

// //add id
// li.id = 'new-item';

// //add attributes
// li.setAttribute('title', 'new item');

// //create text node
// li.appendChild(document.createTextNode('hello world'));

// //append li as achild to the ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// Event listeners
// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('Hello World');
// });

//set local storage
localStorage.setItem('name', 'John');

//set session storage
sessionStorage.setItem('name', 'Maria');
