
// Optional Chaining

const user = {
  name: 'Miguel',
  age: 20,
  address: {
    street: 'Rua Teste',
    number: 107,
    zip: {
      code: 895500,
      city: 'Guarulhos'
    },
    //showFullAdress(){
    //  return 'ok';
    //}
  }
};

//Tenta acessar o address do user, porém se não existir ele nao vai mais acessar o restante

// tenta acesar a funcao, se nao acessar retorna nao informado.
document.body.innerText = user.address?.showFullAdress?.() ?? 'nao informado'








