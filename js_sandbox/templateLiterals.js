const { list } = require("cowsay")

const firstName = 'annie'
const age = 40
const job = 'software engineer'
const city = 'planet earth'
let html= `
<ul>
  <li>Name: ${firstName}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${age > 30? 'Over 30' : 'under 30'}</li>
</ul>
`
