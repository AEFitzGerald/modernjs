//just adding async makes the function return a promise
// async function myFunc() {

  //waits for promise to be resolved 
//   const promise = new Promise((resolve, reject) =>  {
//     setTimeout(() => resolve('Hello'), 1000)
//   })

//   const res = await promise
//   return res
// }

// myFunc()
// .then(res => console.log(res))


//fabricated error
// async function myFunc() {
  
//   const promise = new Promise((resolve, reject) =>  {
//     setTimeout(() => resolve('Hello'), 1000)
//   })

//   const error = true

//   if(!error) {
//     const res = await promise
//     return res
//   } else {
//     await Promise.reject(new Error('This is a fabricated Error'))
//   }
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))

async function getUsers() {
  //await response of fetch call

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
  //only proceed if its resolved
  const data = await response.json()

  // only proceed once when second promise is resolved
  return data
}

getUsers().then(users=> console.log(users))