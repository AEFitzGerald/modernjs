//event bubbling

//putting event on child and bubbling up the events to above 
//event listeners

document.querySelector('.card-title').addEventListener('click',
function(){
  console.log('card title')
})


//event delegation

const deleteItem = document.querySelector('.delete-item')
deleteItem.addEventListener('click', deleteItem)

function deleteItem(){
  console.log('delete items')
}


document.body.addEventListener('click', deleteItem)
function deleteItem(e) {
  if(e.target.parentElement.className === 'd secondary content')
  console.log('delete item')
}


if(e.target.parentElement.classList.contains('delete-item')){
  console.log('delete item')
  e.target.partentElement.parentElement.remove()
}