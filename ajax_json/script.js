document.getElementById('button1').addEventListener('click', loadCustomer)

function loadCustomer(e) {

  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customer.json', true)

  xhr.onload = function(){
    if(this.status === 200) {
      console.log(this.responseText)

      //parse it as an object
      //its a json string so we need to run it through json parse
      const customer = JSON.parse(this.responseText)

      const output = `
      <ul>
        <li>Id: ${customer.id}</li>
        <li>Name: ${customer.fullName}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phoneNumber}</li>
      </ul>
        `

        document.getElementById('customer').innerHTML = output
    }
  }

  xhr.send()
}

//load customers
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomers(e) {

  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customers.json', true)

  xhr.onload = function(){
    if(this.status === 200) {
      console.log(this.responseText)
      //parse it as an object
      //its a json string so we need to run it through json parse
      const customers = JSON.parse(this.responseText)

      let output = ''
      
      customers.forEach(function(customer){
        output += `
        <ul>
          <li>Id: ${customer.id}</li>
          <li>Name: ${customer.fullName}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phoneNumber}</li>
        </ul>
          `
      })
        document.getElementById('customers').innerHTML = output
    }
  }

  xhr.send()
}