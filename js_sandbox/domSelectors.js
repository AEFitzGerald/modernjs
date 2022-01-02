//javascript selectors

//single element

//document.getElementById()
//for dynamic functionality
console.log(document.getElementById('elementId'))

//get things from the element
console.log(document.getElementById('elementId').id)
console.log(document.getElementById('elementId').className)
console.log(document.getElementById('elementId').style.background='#333')



const taskTitle = document.getElementById('elementId')

document.taskTitle.textContent= 'Task List'

document.taskTitle.innerText= 'My Tasks'

document.taskTitle.innerHTML='>span style = "color: red"> Task List</span>'



//document.querySelector()

console.log(document.querySelector('elementId'))
console.log(document.querySelector('h5'))
// only gets the first item in the list because its a single selector
console.log(document.querySelector('li').style.color = 'red')

//nest lis
document.querySelector('ul li').style.color ='blue'
document.querySelector('li:last-child').style.color='red'
document.querySelector('li:nth-child(3)').style.color='red'
document.querySelector('li:nth-child(4)').textContent = "Hello World"
// will only change first odd because its a single selector
document.querySelector('li:nth-child(odd)').textContent = "Hello Bananas"






//multiple element selector returns an html selection

document.getElementsByClassName

const items = 
document.getElementsByClassName('collection-item')
console.log(items)

console.log(items[0])

items[0].style.color = 'red'
items[3].textContent = 'Hello'

//target a section of elements without targeting the entire global list
const listItems = document.querySelector('ul').getElementsByClassName('collection-item')


document.getElementsByTagName

const lis = 
document.getElementsByTagName('li')
console.log(lis)

console.log(lis[0])

lis[0].style.color = 'red'
lis[3].textContent = 'Hello'

//target a section of elements without targeting the entire global list
const listlis = document.querySelector('group8').getElementsByTagName('li')


lis = Array.from(lis)

lis.reverse()

lis.forEach(function(li){
  console.log(li.className)
  li.textContent=`${index}: Hello!`
})

console.log(lis)


//MULTIPLE ELEMENT DOM SELECTORs
//query selector All 
//returns node list, counts elements, text nodes,
//array methods without having to convert

const items = document.querySelectorAll('ul.collection li.collection-item')
console.log(items)

items.forEach(function(item, index) {
  item.textContent = `${index}: hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')

for(let i = 0; i < liOdd.length; i++){
  liOdd[i].style.background= "#f4f4f4"
}
