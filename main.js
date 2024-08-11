// Promisses
// Existem funções que demoram para retornam informações


const somaDoisNumeros = (a, b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(a+ b)
    }, 2000)
  });
}

somaDoisNumeros(1,2)
  .then(soma => {
    document.body.innerText  = soma
  })
  .catch(err => {
    console.log(err)
  })