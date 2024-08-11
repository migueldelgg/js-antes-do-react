// Promisses
// Existem funções que demoram para retornam informações

// Async -> algum codigo dentro da função que demora para executar. 
// Toda funcao que usar async, automaticamente vira uma promise
async function buscaDadosNoGitHub() {
  try{
    const response = await fetch('https://api.github.com/users/migueldelgg');

    const body = await response.json();

    return body.name;
  } catch(err) {
    console.log(err)
  } finally {
    console.log('Enfim amigos, promises.')
  }
}

buscaDadosNoGitHub().then(name => {
  console.log(name)
})
  

