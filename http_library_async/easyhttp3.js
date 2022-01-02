/**
 * EasyHTTP Library
 * Library for making HTTP requests with async
 * 
 * @version 2.0.0
 * @author Anna FitzGerald
 * @license MIT
 * 
 */

//we don't a constructor because we don't need the xhr object
class EasyHTTP {

  //HTTP GET REQUEST

  async get( url ) {
    const response = await fetch(url)
    const resData = await response.json()
    return resData

  }


  //HTTP POST REQUEST
  async post( url, data ) {

    const response = await fetch( url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      const resData = await response.json()
      return resData
      
  }


  //HTTP PUT REQUEST
  async put( url, data ) {
    const response = await fetch( url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resData = await response.json()
      return resData        
  }


  //HTTP DELETE REQUEST
  async delete( url ) {
    const response = await fetch( url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const resData = await 'Resource deleted'
      return resData            
    }
}