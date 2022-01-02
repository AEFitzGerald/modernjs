//blocks of code defined and called

//function declaration
function greet(firstName, lastName) {
  //console.log('hello')
  return 'Hello' + firstName + ' ' + lastName
}

console.log(greet('Judy', 'Garland'))

//function expression
const square = function(x = 3) {
  return x * x
}

//console.log(square)

//iIfy immediately invocable function
//declared and runs at same time 
//good for module pattern
(function(name){
  console.log('Hello ' + name)
})('Brad');



const todo = {
  add: function() {
    console.log('Add todo..')
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function() {
  console.log('delete todo....')
}

todo.add()
todo.edit(22)
todo.delete()
