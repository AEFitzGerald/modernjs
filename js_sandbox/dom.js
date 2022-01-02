/*
DOCUMENT OBJECT MODEL
tree of nodes/elements created by the browser
javascript can be used to read write to the DOM
Object oriented representation

document-> root element<html> -> element head -> element body
head-> elements title, text
body -> element i.e. h1 -> text 'my header'

not using jquery makes the application faster

*/

let val;


val = document;


val = document.head
val = document.body
val = document.doctype
val = document.domain
val = document.URL
val = document.characterSet
val = document.contentType

val = document.forms
val = document.forms[0]
val = document.forms[0].id
val = document.forms[0].method
val = document.forms[0].action

val = document.links
val = document.links[0]
val = document.links[0].id
val = document.links[0].className
val = document.links[0].classList

val = document.images

val = document.scripts
val = document.scripts[2].getAttribute('src')




console.log(val)
