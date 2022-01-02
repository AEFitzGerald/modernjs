document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getExternal)

//"If there is an http error, it will not fire off .catch automatically. 
//You have to check the response and throw an error yourself."

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}


//get local text file data

  fetch('test.txt')
  //we want to return the text method that is in prototype
  //if json than res.json
  .then(res=> res.text())
  .then(handleErrors)
  .then(data => {
      console.log(data)
      document.getElementById('output').innerHTML = data
  })
  .catch(err => console.log(err))
}


//get local json data

function getJSON(){
  fetch('posts.json')
    .then(res=> res.json())
    .then(handleErrors)
    .then(data {
      console.log(data)
      let output = ''
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      })
      document.getElementById('output').innerHTML = output 
    })
    .catch(err => console.log(err))
}

//get from external api
function getExternal(){
  fetch('https://api.github.com/users')
    .then(res=> res.json())
    .then(handleErrors)
    .then(data => {
      console.log(data)
      let output = ''
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      })
      document.getElementById('output').innerHTML = output 
     })
    .catch(err => console.log(err))    
}
