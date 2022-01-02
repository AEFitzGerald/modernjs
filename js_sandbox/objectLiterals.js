const person = {
  firstName: 'ash',
  lastName: 'stone',
  age: 53,
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017-this.age
  }

}

let val = person
val = person.firstName
val = person['lastName']
val = person.address.city
val = person.getBirthYear()



