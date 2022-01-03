
class GitHub {
  constructor() {
    this.client_id = 'cc1c770fae1d6e8b139a'
    this.client_secret ='3e33a1af233d0b159799f870a30366b96122ccc7'
    this.repos_count = 5
    this.repos_sort ='created:asc'
  }


  async getUser( user ) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile,
      repos
    }
  
  }

  

}