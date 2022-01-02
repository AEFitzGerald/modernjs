document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getExternal)

//get local text file data
function getText(){
  fetch('test.txt')
  .then(function(res){
    //we want to return the text method that is in prototype
    //if json than res.json
    return res.text()
  })
  .then(function(data) {
    console.log(data)
    document.getElementById('output').innerHTML = data
  })
  .catch(function(err){
    console.log(err)
  })
}

//get local json data

function getJSON(){
  fetch('posts.json')
    .then(function(res){
      return res.json()
    })
    .then(function(data) {
      console.log(data)
      let output = ''
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      })
      document.getElementById('output').innerHTML = output 
    })
}

//get from external api
function getExternal(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json()
    })
    .then(function(data) {
      console.log(data)
      let output = ''
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`
      })
      document.getElementById('output').innerHTML = output 
    })
}
