
//createElement DOM
const li = document.createElement('li');

//add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item');

//create text node and append
li.appendChild(document.createTextNode('Hello World'));


// Create new link element
const link = document.createElement('a');

//Add classes
link.className= 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class ="fa fa-remove"></i>';

//append link into li
li.appendChild(link);

// append li as child to ul 
document.querySelector('ul.collection').appendChild(li)

console.log(li)

// Removing and replacing Elements

//create element
const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';

//new  text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

//remove child element
list.removeChild(lis[3])
console.log(newHeading);

// CLASSES AND ATTRIBUTES

const firstLi = document.querySelector('li:first-child');
const linkb = firstLi.children[0];

console.log(firstLi.children[0])

let val;
val = linkb.className;
val = linkb.classList;
linkb.classList.add('test');
linkb.classList.remove('test');
val = linkb;

// attributes
val = linkb.getAttribute('href')
val = linkb.setAttribute('href', 'http://google.com')
val = linkb.hasAttribute('title'); //bool t or f return
linkb.removeAttribute('title')


console.log(val)





