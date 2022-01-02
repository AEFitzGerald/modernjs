document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value

  const xhr = new XMLHttpRequest()
  // xhr.withCredentials = true;

  xhr.open("GET", `https://dad-jokes.p.rapidapi.com/random/joke?count=${number}`, true)
  xhr.setRequestHeader("x-rapidapi-host", "dad-jokes.p.rapidapi.com")
  xhr.setRequestHeader("x-rapidapi-key", "e2899f7be7msh0ba1a16f4be8779p1dc523jsn228dd5d990ab")

  xhr.onload = function() {
    if(this.status ===200){
    const response = JSON.parse(this.responseText)
    console.log(response)
    
    let output = ''

    if(response.success === true){
      response.body.forEach(function(joke){
        output += `<p>Setup: ${joke.setup}</p><br>
        <p>Punchline: ${joke.punchline}</p>`
      })
    } else {
        output += '<p>No jokes for you! haha!</p>'
    }
  
    document.querySelector('.jokes').innerHTML = output
  }
}

xhr.send()

e.preventDefault()

}