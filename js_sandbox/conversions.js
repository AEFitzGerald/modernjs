let val;

//Number to string
val = String(5);
val = String(4+4)

//bool to string
val = String(true)

//date to string
val = String(new Date())

//array to string
val = String([1,2,3,4])

//toString()
val = (5).toString()
val = (true).toString()

//string to number
val = Number('5')
val = Number(true) //1
val = Number(false) // 0 
val = Number(null)//0
val = Number('hello')//NaN
val = Number([1,2,3])//NaN

val = parseInt('100.30') //100
val = parseFloat('100.30') //100.3





// OUtput
console.log(val)
console.log(typeof val)
console.log(val.length)
console.log(val.toFixed(2))

const val1 = 5
const val2 = 6
const sum = val1 + val2
console.log(sum)
console.log(typeof sum)