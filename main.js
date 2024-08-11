// Promisses
// Existem funções que demoram para retornam informações

fetch('https://api.github.com/users/migueldelgg')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body)
  })
  // .then(response => {
  //   response.json().then(body => {
  //     console.log(body)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('finalmente!')
  })

