// For loop

for(let i = 0; i < 10; i++) {
  if(i === 2) {
    console.log('2 is my faborite number')
    continue //continue with the loop keep going with iteration
  }
  if (i === 5) {
    console.log('Stop the loop')
    break
  }

  console.log('Number ' + i)
  
}

let i = 0

//while
while(i < 10) {
  console.log('Number ' + i)
  i++
}


//do will always run even if condition is not met(while will not run if
//condition is not met)

let i = 100
do {
  console.log('Number '+ 1)
  i++
}

while(i < 10)

const cars = ['toyota', 'tesla']
for (let i = 0; i < cars.length; i++ ){
  console.log(cars[i])
}

cars.forEach(function(car){
  console.log(car)
}

const user = {
  firstName: 'Ginja',
  lastName: 'Penut',
  age: 40
}

//for in 
// x gives key
// to get object with all key value pairs

for (let x in user) {
  console.log(`${x} : ${user[x]}`)
}