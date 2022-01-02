const numbers = [43,56,44,35,2]
const numbers2 = new Array(22,45,33,76,54)
const fruit = ['apple', 'banana']
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()]


let val
//check length
val = numbers.length
//check if isarray
val = Array.isArray(numbers)

//get single val
val = numbers[3]

//insert into array
numbers[2] = 100

//find index
val = numbers.indexOf(35)

//Mutating arrays

//add on to end
numbers.push(250)

//add on to the front
numbers.unshift(120)

//take off from end
numbers.pop()

//take off from front
numbers.shift()

//splice values()
numbers.splice(1,1) //where we want to start and where we want to end

//reverse
numbers.reverse()

//concatenate
val = numbers.concate(numbers2)

//sort 
val = fruit.sort()
val= numbers.sort()

//sort compare with callback
val = numbers.sort(function(x,y){
  return x -y
})

val = numbers.sort(function(x,y){
  return y-x
})


//find 
function under50(num) {
  return num < 50
}

val = numbers.find(over50)


console.log(numbers)
console.log(val)


