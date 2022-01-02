const http = new easyHTTP


// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(error, response) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(response)
//   }
// })


//GET SINGLE POSTS

// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(error, response) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(response)
//   }
// })

//CREATE DATA

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

//CREATE POST
// http.post('https://jsonplaceholder.typicode.com/posts', 
// data, function(error, post) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(post)
//   }
// })


//UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/1', 
// data, function(error, post) {
//   if(error) {
//     console.log(error)
//   } else {
//     console.log(post)
//   }
// })

//DELETE POSTS
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(error, response) {
  if(error) {
    console.log(error)
  } else {
    console.log(response)
  }
})
