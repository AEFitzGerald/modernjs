//ES5 Object Oriented Library with Prototypes
//Ajax
//Prototypes are what run under the classes

function easyHTTP() {
  this.http = new XMLHttpRequest()
}

// HTTP GET req
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true)

  let self = this;
  this.http.onload = function() {
    //this is undefined within the function
    //'this' pertains to the function w/in it and will cause an error
    //while an arrow function contains a lexical this
    //in ES5 the way to do it is with self
    if(self.http.status === 200) {
      //null value for error parameter 
      callback(null, self.http.responseText)
    } else {
        callback('Error: ' + self.http.status)
    }
  }

  this.http.send()
}

// HTTP POST req

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true)
  this.http.setRequestHeader('Content-type', 'application/json')

  
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText)
  }


  this.http.send(JSON.stringify(data))
}

// HTTP PUT req

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true)
  this.http.setRequestHeader('Content-type', 'application/json')

  
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText)
  }


  this.http.send(JSON.stringify(data))
}

//HTTP DELETE req

easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true)

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) { 
      callback(null, 'Post Deleted')
    } else {
        callback('Error: ' + self.http.status)
    }
  }

  this.http.send()
}