/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Anna FitzGerald
 * @license MIT
 * 
 */


//we don't a constructor because we don't need the xhr object
class EasyHTTP {

  //HTTP GET REQUEST
  //Wrap Fetch in a promise 
  get( url ) {
    return new Promise((resolve, reject) => {
      fetch( url )
      .then( res => res.json())
      .then(data => resolve( data ))
      .catch(err => reject( err ))
    })  
  }


  //HTTP POST REQUEST
  post( url, data ) {
    return new Promise(( resolve, reject ) => {
      fetch( url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res => res.json())
      .then(data => resolve( data ))
      .catch(err => reject( err ))
    })  
  }


  //HTTP PUT REQUEST
  put( url, data ) {
    return new Promise(( resolve, reject ) => {
      fetch( url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res => res.json())
      .then(data => resolve( data ))
      .catch(err => reject( err ))
    })  
  }


  //HTTP DELETE REQUEST
  delete( url ) {
    return new Promise(( resolve, reject ) => {
      fetch( url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then( res => res.json())
      .then(() => resolve( 'Resource Deleted...' ))
      .catch(err => reject( err ))
    })  
  }

}