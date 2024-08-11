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

// Desestruturação

function mostraIdade({ name, idade }) {
  return name + " " + idade
}

// Rest Operator -> operador de resto.

//const {name, idade, ...rest } = user;

const array = [1,2,3,4,5,6,7,8,9,10]

// Pulando o second do array.
const [first, , third, ...rest] = array;

document.body.innerText = JSON.stringify({first, third, rest})








