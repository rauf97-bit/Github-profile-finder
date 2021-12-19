class Github {
  constructor(){
    this.client_id = '854ecad9c0e708a419b0'
    this.client_secrets = 'cef0db07465d806d665993d023119cb8bd3e6f85'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`)
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await userResponse.json()
    const repos = await repoResponse.json()
 
    return{
      profile,
      repos
    }
  }
}