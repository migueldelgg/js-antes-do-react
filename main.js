// Objetos

const user = {
  name: 'Miguel',
  idade: 20,
  nickname: 'Malucao',
  address: {
    street: 'Rua Teste',
    number: 107
  }
};



// Desestruturação -> remoção de parte do objeto para uma váriavel.
// Atribuindo um valor default no nickname, mas se esse atributo existir no objeto, a preferencia de valor é do objeto.
const { address, idade: age, nickname = 'Miguelzera' } = user

function mostraIdade({ name, idade }) {
  return name + " " + idade
}

document.body.innerText = mostraIdade(user)

/*o operador in serve para verificar se há um atributo dentro do objeto user
document.body.innerText = ('name' in user)

Retorna um array com todos os atributos presentes no objeto user
document.body.innerText = Object.keys(user)

Retorna os valores dos atributos
document.body.innerText = Object.values(user)

Retorna os atributos e seus valores em formato json.
document.body.innerText = JSON.stringify(Object.values(user))

Retorna um vetor com o objeto e seus valores. 
document.body.innerText = JSON.stringify(Object.entries(user)) */







