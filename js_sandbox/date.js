let val 

//instantiate date object
const today = new Date('1-1-2017')

let birthday = new Date('9-10-1981 11:25:00')
birthday = new Date('September 10 1981')
birthday = new Date('9/10/1981')



val = today.getMonth()
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()

birthday.setMonth(2)
birthday.setFullYear(1985)

birthday.setHours(3)
birthday.setSeconds(25)


console.log(val)

