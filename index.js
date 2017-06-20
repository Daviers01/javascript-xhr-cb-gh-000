
function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/Daviers01/repos')
  req.send()
}
