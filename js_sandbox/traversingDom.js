//traverse the dom up and down

let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

//get the child nodes of the ul
//the text nodes returned are the line breaks in this situation
//and the listnodes
val = list.childNodes

val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[1].nodeType

//this returns html collection

val = list.children
val = list.children[0]
list.children[1].textContent = 'hello'

//get children of children
val = list.children[3].children[0].id = 'test-link'
val = list.firstChild;
val = list.firstElementChild
val = list.lastChild
val = list.lastElementChild

//count child elements
val = list.childElementCount


//parents

val = listItem.parentNode
val = listItem.parentElement.parentElement

val = listItem.nextSibling
val = listItem.nextElementSibling.nextElementSibling

val = listItem.previousSibling
val = listItem.previousElementSibling




console.log(val);