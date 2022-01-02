const id = 100

//equal to 
if(id === 100) {
  console.log('CORRECT')
}else{
  console.log('INCORRECT')
}


//not equal to 
if(id != 101) {
  console.log('CORRECT')
}else {
  console.log('INCORRECT')
}


//test if undefined
//strict equality string vs. number
if(typeof id !== 'undefined') {
  console.log(`the id is ${id}`)
} else {
  console.log('No Id')
}

//greater or less than
//if else

// And && Logical operators


const firstName = 'bobby'
const age = 20

if (age > 0 && age < 12 ){
  console.log(`${firstName} is a child`)
} else if (age > 12 && age < 19){
  console.log(`${firstName} is a teenager`)
} else {
  console.log(`${firstName} is an adult`)
}

// OR  ||

if (age < 16 || age > 65) {
  console.log(`${firstName} cannot run in race`)
} else {
  console.log(`${firstName} is registered for the race`)
}


//ternary
console.log(id === 100 ? 'Correct' : 'Incorrect')

//curly braces optional
if(id === 100) 
  console.log('CORRECT')
else
  console.log('INCORRECT')


const color = 'red'


//use switches when there are a lot of cases vs. if else
switch(color){
  case 'red':
    console.log('color is red')
    break
  case 'blue':
    console.log('color is blue')
    break
  default:
    console.log('color is not red or blue')
    break
}

let day

switch(new Date().getDay()) {
  case 0:
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2: 
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4: 
    day = 'Thursday'
    break
  case 5: 
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
    break
}

console.log(`Today is ${day}`)