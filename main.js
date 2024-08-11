
const array = [1, 2, 3, 4, 5]

//for(const i of array){
// document.body.innerText += i
//}

//array.forEach(i => {
//  document.body.innerText += i
//})


// Map sempre vai retornar um array do mesmo tamanho do array original
// usamos o map() quando queremos transformar o array antigo em algo novo, porem de mesmo tamanho.
// const novoArray = array.map(item => {
//   if(item % 2 === 0){
//     return item * 10
//   }
//   return item
// })

// map, filter, every, some, find, findIndex, reduce

//const novoArray = array.filter(item => item % 2 === 0)
//  .map(item => item * 10)

//O every retorna true ou false, se todos os itens passarem na condição descrita.
// const todosItensSaoNumeros = array.every(item => typeof item === 'number')

// const arrayComTexto = [1, 2, 3, 4, 5, 'aloha']

// const peloMensoUmIteamNaoEUmNumero = arrayComTexto.some(item => {
//   return typeof item !== 'number'
// })

//Find

//Encontra o primeiro que satisfaça a condição
// const par = array.find(item => item % 2 === 0)

//Encontra o index do primeiro item que satisfaça a condição
// const index = array.findIndex(item => item % 2 === 0)

//Reduce
const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma)











