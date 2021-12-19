// INSTANTIATE GITHUB
const github = new Github
const ui = new UI

const username = document.getElementById('searchInput')

// ADD EVENT LISTENER
username.addEventListener('keyup', (e)=>{
  const userText = e.target.value
  console.log(userText)

  if (!userText == '') {
    
    github.getUser(userText)
    .then(response => {
      console.log(response.repos)
      if (response.profile.message === 'Not Found') {
        // SHOW ERROR
        ui.showError()        
      } else {
        // SHOW PROFILE
        ui.showProfile(response.profile)
        ui.showRepo(response.repos)
      }
    })
  } 

  else{
    // CLEAR PROFILE
    ui.clearProfile()
  }

})

